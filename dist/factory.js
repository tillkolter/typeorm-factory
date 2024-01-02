"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const instanceAttributes_1 = require("./instanceAttributes");
const subfactories_1 = require("./subfactories");
class Factory {
    /**
     * Make a new entity without persisting it
     */
    async make(overrideParams = {}) {
        const attrs = { ...this.attrs(), ...overrideParams };
        const entity = await this.makeEntity(attrs, false);
        await this.applyEagerInstanceAttributes(entity, attrs, false);
        await this.applyLazyInstanceAttributes(entity, attrs, false);
        return entity;
    }
    /**
     * Make many new entities without persisting it
     */
    async makeMany(amount, overrideParams = {}) {
        const list = [];
        for (let index = 0; index < amount; index++) {
            list[index] = await this.make(overrideParams);
        }
        return list;
    }
    /**
     * Create a new entity and persist it
     */
    async create(overrideParams = {}, saveOptions) {
        const attrs = { ...this.attrs(), ...overrideParams };
        const preloadedAttrs = Object.entries(attrs).filter(([, value]) => !(value instanceof instanceAttributes_1.LazyInstanceAttribute));
        const entity = await this.makeEntity(Object.fromEntries(preloadedAttrs), true);
        await this.applyEagerInstanceAttributes(entity, attrs, true);
        const em = this.dataSource.getRepository(this.entity);
        const savedEntity = await em.save(entity, saveOptions);
        await this.applyLazyInstanceAttributes(savedEntity, attrs, true);
        return em.save(savedEntity, saveOptions);
    }
    /**
     * Create many new entities and persist them
     */
    async createMany(amount, overrideParams = {}, saveOptions) {
        const list = [];
        for (let index = 0; index < amount; index++) {
            list[index] = await this.create(overrideParams, saveOptions);
        }
        return list;
    }
    async makeEntity(attrs, shouldPersist) {
        const entity = new this.entity();
        await Promise.all(Object.entries(attrs).map(async ([key, value]) => {
            Object.assign(entity, { [key]: await Factory.resolveValue(value, shouldPersist) });
        }));
        return entity;
    }
    async applyEagerInstanceAttributes(entity, attrs, shouldPersist) {
        await Promise.all(Object.entries(attrs).map(async ([key, value]) => {
            if (value instanceof instanceAttributes_1.EagerInstanceAttribute) {
                const newAttrib = value.resolve(entity);
                Object.assign(entity, { [key]: await Factory.resolveValue(newAttrib, shouldPersist) });
            }
        }));
    }
    async applyLazyInstanceAttributes(entity, attrs, shouldPersist) {
        await Promise.all(Object.entries(attrs).map(async ([key, value]) => {
            if (value instanceof instanceAttributes_1.LazyInstanceAttribute) {
                const newAttrib = value.resolve(entity);
                Object.assign(entity, { [key]: await Factory.resolveValue(newAttrib, shouldPersist) });
            }
        }));
    }
    static async resolveValue(value, shouldPersist) {
        if (value instanceof subfactories_1.BaseSubfactory) {
            return shouldPersist ? value.create() : value.make();
        }
        else if (value instanceof Array) {
            return await Promise.all(value.map((val) => Factory.resolveValue(val, shouldPersist)));
        }
        else if (value instanceof Function) {
            return value();
        }
        else {
            return value;
        }
    }
}
exports.Factory = Factory;
//# sourceMappingURL=factory.js.map