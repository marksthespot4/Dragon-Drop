import { isFunction } from "./function";

export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
