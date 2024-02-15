// LocalStorage utils
export const getFromLocalStorage = (key: string): string | null =>
  localStorage.getItem(key);

export const setToLocalStorage = (key: string, value: string): void =>
  localStorage.setItem(key, value);
