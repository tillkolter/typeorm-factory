import { BaseSubfactory } from './baseSubfactory';
export class CollectionSubfactory extends BaseSubfactory {
    count;
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
//# sourceMappingURL=collectionSubfactory.js.map