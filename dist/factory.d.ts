import type { DataSource, SaveOptions } from 'typeorm';
import type { Constructable, FactorizedAttrs } from './types';
export declare abstract class Factory<T extends object> {
    protected abstract entity: Constructable<T>;
    protected abstract dataSource: DataSource;
    protected abstract attrs(): FactorizedAttrs<T>;
    /**
     * Make a new entity without persisting it
     */
    make(overrideParams?: Partial<FactorizedAttrs<T>>): Promise<T>;
    /**
     * Make many new entities without persisting it
     */
    makeMany(amount: number, overrideParams?: Partial<FactorizedAttrs<T>>): Promise<T[]>;
    /**
     * Create a new entity and persist it
     */
    create(overrideParams?: Partial<FactorizedAttrs<T>>, saveOptions?: SaveOptions): Promise<T>;
    /**
     * Create many new entities and persist them
     */
    createMany(amount: number, overrideParams?: Partial<FactorizedAttrs<T>>, saveOptions?: SaveOptions): Promise<T[]>;
    private makeEntity;
    private applyEagerInstanceAttributes;
    private applyLazyInstanceAttributes;
    private static resolveValue;
}
