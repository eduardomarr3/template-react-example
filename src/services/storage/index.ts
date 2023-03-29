import Keys from './keys';

const Storage = window.localStorage;

const clearWholeStorage = (): void => {
  Storage.clear();
};

const getToken = (): Token => {
  const value = Storage.getItem(Keys.TOKEN);
  return value ? JSON.parse(value) : '';
};

const setToken = (token: Token | null): void => {
  const item = JSON.stringify(token);
  Storage.setItem(Keys.TOKEN, item);
};

export const StorageService = {
  clearWholeStorage,
  getToken,
  setToken,
};
