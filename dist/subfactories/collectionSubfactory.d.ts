import type { Factory } from '../factory';
import type { Constructable, FactorizedAttrs } from '../types';
import { BaseSubfactory } from './baseSubfactory';
export declare class CollectionSubfactory<T extends object> extends BaseSubfactory<T> {
    private count;
    constructor(factoryOrFactoryInstance: Constructable<Factory<T>> | Factory<T>, count: number, values?: Partial<FactorizedAttrs<T>>);
    create(): Promise<T[]>;
    make(): Promise<T[]>;
}
