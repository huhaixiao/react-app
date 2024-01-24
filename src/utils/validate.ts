// https://github.com/browserify/node-util/blob/master/util.js

function objectToString(o: unknown) {
  return Object.prototype.toString.call(o);
}

export function isFunction(arg: unknown): arg is Function {
  return typeof arg === "function";
}

export function isPromise(obj: unknown): obj is Promise<unknown> {
  return (
    !!obj && typeof obj === "object" && typeof (obj as any).then === "function"
  );
}

export function isRegExp(re: unknown): re is RegExp {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}

export function isPrimitive(arg: unknown): boolean {
  return (
    arg === null ||
    typeof arg === "boolean" ||
    typeof arg === "number" ||
    typeof arg === "string" ||
    typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined"
  );
}

export function isObject(obj: unknown): obj is object {
  return typeof obj === "object" && obj !== null;
}

export function isArray(obj: unknown): obj is Array<unknown> {
  return Array.isArray(obj);
}

export function isUndefined(arg: unknown): arg is undefined {
  return arg === void 0;
}

export function isBoolean(arg: unknown): arg is boolean {
  return typeof arg === "boolean";
}

export function isTruthy(arg: unknown): arg is boolean {
  if (arg) {
    return true;
  }

  return false;
}

export function isFalsy(arg: unknown): arg is boolean {
  if (isTruthy(arg)) {
    return false;
  }

  return true;
}
