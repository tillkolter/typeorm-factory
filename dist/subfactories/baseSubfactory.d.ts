import { Factory } from '../factory';
import type { Constructable, FactorizedAttrs } from '../types';
export declare abstract class BaseSubfactory<T extends object> {
    protected values?: Partial<FactorizedAttrs<T>> | undefined;
    protected factoryInstance: Factory<T>;
    constructor(factoryOrFactoryInstance: Constructable<Factory<T>> | Factory<T>, values?: Partial<FactorizedAttrs<T>> | undefined);
    abstract create(): Promise<T> | Promise<T[]>;
    abstract make(): Promise<T> | Promise<T[]>;
}
