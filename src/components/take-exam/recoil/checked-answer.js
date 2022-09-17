import { atomFamily } from 'recoil';

export const checkedAnswerAtom = atomFamily({
  key: 'CHECKED_ANSWER_ATOM',
  default: false,
});
