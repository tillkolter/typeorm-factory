import type { Factory } from '../factory';
import type { Constructable, FactorizedAttrs } from '../types';
import { BaseSubfactory } from './baseSubfactory';
export declare class SingleSubfactory<T extends object> extends BaseSubfactory<T> {
    constructor(factoryOrFactoryInstance: Constructable<Factory<T>> | Factory<T>, values?: Partial<FactorizedAttrs<T>>);
    create(): Promise<T>;
    make(): Promise<T>;
}
