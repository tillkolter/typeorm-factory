"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleSubfactory = void 0;
const baseSubfactory_1 = require("./baseSubfactory");
class SingleSubfactory extends baseSubfactory_1.BaseSubfactory {
    constructor(factoryOrFactoryInstance, values) {
        super(factoryOrFactoryInstance, values);
    }
    create() {
        return this.factoryInstance.create(this.values);
    }
    make() {
        return this.factoryInstance.make(this.values);
    }
}
exports.SingleSubfactory = SingleSubfactory;
//# sourceMappingURL=singleSubfactory.js.map