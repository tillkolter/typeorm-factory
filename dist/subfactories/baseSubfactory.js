"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSubfactory = void 0;
const factory_1 = require("../factory");
class BaseSubfactory {
    constructor(factoryOrFactoryInstance, values) {
        this.values = values;
        this.factoryInstance =
            factoryOrFactoryInstance instanceof factory_1.Factory ? factoryOrFactoryInstance : new factoryOrFactoryInstance();
    }
}
exports.BaseSubfactory = BaseSubfactory;
//# sourceMappingURL=baseSubfactory.js.map