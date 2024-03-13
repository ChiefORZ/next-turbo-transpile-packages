export const is = (n: unknown): n is number | string | object | ReturnType<typeof Function> =>
  n !== undefined && n !== null;
export const isBoolean = (n: unknown): n is boolean => typeof n === "boolean";
export const isNumber = (n: unknown): n is number => typeof n === "number" && !Number.isNaN(n);
export const isString = (n: unknown): n is string => typeof n === "string" && n !== "";
export const isObject = (n: unknown): n is object => typeof n === "object" && n !== null;
export const isArray = (n: unknown): n is unknown[] => isObject(n) && Array.isArray(n);
export const isFunction = (n: unknown): n is ReturnType<typeof Function> => typeof n === "function";

export const isBrowser = (): boolean => typeof window !== "undefined";
export const isServer = (): boolean => typeof window === "undefined";