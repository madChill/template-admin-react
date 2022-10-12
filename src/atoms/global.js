import { atom, selector } from 'recoil';

export const selectionRouteMatrix = atom({
  key: 'selectionRouteMatrix', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
export const selectSelectionPlaceOfIssue = selector({
  key: 'selectSelectionPlaceOfIssue',
  get: ({ get }) => {
    const list = get(selectionList);
    const filterEntry = list.filter(entry => {
      const arrChannel = entry?.channel.split(',');
      return entry.category === 'PLACEOFISSUE';
    });
    const listEntry = filterEntry.map(entryIssue => {
      return {
        label: entryIssue.values?.vi,
        id: entryIssue.id,
      };
    });
    return listEntry || [];
  },
});