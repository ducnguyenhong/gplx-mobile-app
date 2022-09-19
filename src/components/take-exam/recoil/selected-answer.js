import { atom } from 'recoil';

export const selectedAnswerListAtom = atom({
  key: 'SELECTED_ANSWER_LIST_ATOM',
  default: [],
});
