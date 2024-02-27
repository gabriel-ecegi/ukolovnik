import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";

export function useDynamicRef<T = unknown>(
  defaultValue: T,
): MutableRefObject<T> {
  const dynamicRef = useRef(defaultValue);

  useEffect(() => {
    dynamicRef.current = defaultValue;
  }, [defaultValue]);

  return dynamicRef;
}
