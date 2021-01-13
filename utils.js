export function isArray(value) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(value);
    } else {
        return Object.prototype.toString.call(value) === "[object Array]";
    }
}

export function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}

export function isNumber(value) {
    return !isNaN(Number(value));
}

export function isFunction(value) {
    return typeof value == "function";
}

export function isString(value) {
    return typeof value == "string";
}

export function isEmpty(value) {
    if (isArray(value)) {
        return value.length === 0;
    }

    if (isObject(value)) {
        return Object.keys(value).length === 0;
    }

    return value === "" || value === undefined || value === null;
}

export function last(data) {
    if (isArray(data) || isString(data)) {
        return data[data.length - 1];
    }
}

export function cloneDeep(obj) {
    let d = isArray(obj) ? obj : {};

    if (isObject(obj)) {
        for (let key in obj) {
            if (obj.hasOwnProperty && obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === "object") {
                    d[key] = cloneDeep(obj[key]);
                } else {
                    d[key] = obj[key];
                }
            }
        }
    }

    return d;
}

export function clone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}

export function deepMerge(a, b) {
    let k;
    for (k in b) {
        a[k] =
            a[k] && a[k].toString() === "[object Object]" ? deepMerge(a[k], b[k]) : (a[k] = b[k]);
    }
    return a;
}
