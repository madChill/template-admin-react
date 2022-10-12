import { atom, selector } from 'recoil';
import key from './key';

export const loading = atom({
  key: key.loading, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const selectLoading = selector({
  key: key.Selectloading,
  get: ({ get }) => {
    const list = get(loading);
    return list;
  },
});
