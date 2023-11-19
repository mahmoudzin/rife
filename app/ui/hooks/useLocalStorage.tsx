"use client";
import { useState, useEffect } from "react";

type Value = string | number | boolean | object | null | undefined;

function useLocalStorage<T extends Value>(
  property: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(property);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(property, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [property, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
