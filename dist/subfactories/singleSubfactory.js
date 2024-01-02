import { BaseSubfactory } from './baseSubfactory';
export class SingleSubfactory extends BaseSubfactory {
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
//# sourceMappingURL=singleSubfactory.js.map