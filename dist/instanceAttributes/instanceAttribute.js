export class InstanceAttribute {
    callback;
    constructor(callback) {
        this.callback = callback;
    }
    resolve(entity) {
        return this.callback(entity);
    }
}
//# sourceMappingURL=instanceAttribute.js.map