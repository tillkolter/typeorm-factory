import { Factory } from '../factory';
export class BaseSubfactory {
    values;
    factoryInstance;
    constructor(factoryOrFactoryInstance, values) {
        this.values = values;
        this.factoryInstance =
            factoryOrFactoryInstance instanceof Factory ? factoryOrFactoryInstance : new factoryOrFactoryInstance();
    }
}
//# sourceMappingURL=baseSubfactory.js.map