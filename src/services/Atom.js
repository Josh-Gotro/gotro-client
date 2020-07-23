import { atom } from 'recoil';

export const isBlackandGold = atom({
    key: 'isBlackandGold', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});