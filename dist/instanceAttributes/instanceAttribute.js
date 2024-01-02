"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceAttribute = void 0;
class InstanceAttribute {
    constructor(callback) {
        this.callback = callback;
    }
    resolve(entity) {
        return this.callback(entity);
    }
}
exports.InstanceAttribute = InstanceAttribute;
//# sourceMappingURL=instanceAttribute.js.map