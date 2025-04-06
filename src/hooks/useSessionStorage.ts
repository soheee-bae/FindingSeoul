import { useCallback } from "react";

type StorageKey = "district" | "selectedStation";

export function useSessionStorage(key: StorageKey) {
  const setItem = useCallback(
    (value: string | number) =>
      typeof window !== "undefined" &&
      window.sessionStorage.setItem(key, `${value}`),
    [key]
  );
  const getItem = useCallback(
    () => typeof window !== "undefined" && window.sessionStorage.getItem(key),
    [key]
  );
  const removeItem = useCallback(
    () =>
      typeof window !== "undefined" && window.sessionStorage.removeItem(key),
    [key]
  );
  console.log(getItem());

  return {
    item: getItem(),
    setItem,
    getItem,
    removeItem,
  };
}
