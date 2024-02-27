export const nameof = <T>(name: keyof T) => name;

/**
 * Is null or undefined
 * @param o
 */
export function isNoU<T>(
  value: T | null | undefined
): value is undefined | null {
  return value === null || value === undefined;
}

export function notNoU<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Does not mutate value.
 *
 * Only changes type for TypeScript.
 * @param o
 */
export const nullAsUndefined = <T>(o: T | null) => o as T | undefined;

export const enumToArray = <T>(enumToConvert: T): Array<keyof T> => {
  return Object.keys(enumToConvert as any) as any;
};

export const isArrayEmpty = (a: Array<unknown> | null | undefined) =>
  !a || a.length === 0;

export type ExtractProps<TComponent> = TComponent extends (
  props: infer P
) => React.JSX.Element
  ? P
  : never;
