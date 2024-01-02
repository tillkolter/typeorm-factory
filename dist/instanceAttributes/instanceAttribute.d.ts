import type { InstanceAttributeCallback } from '../types';
export declare abstract class InstanceAttribute<T, V> {
    private callback;
    constructor(callback: InstanceAttributeCallback<T, V>);
    resolve(entity: T): import("../types").FactorizedAttr<V>;
}
