"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionSubfactory = void 0;
const baseSubfactory_1 = require("./baseSubfactory");
class CollectionSubfactory extends baseSubfactory_1.BaseSubfactory {
    constructor(factoryOrFactoryInstance, count, values) {
        super(factoryOrFactoryInstance, values);
        this.count = count;
    }
    create() {
        return this.factoryInstance.createMany(this.count, this.values);
    }
    make() {
        return this.factoryInstance.makeMany(this.count, this.values);
    }
}
exports.CollectionSubfactory = CollectionSubfactory;
//# sourceMappingURL=collectionSubfactory.js.map