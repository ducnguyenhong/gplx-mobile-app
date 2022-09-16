import { atomFamily } from 'recoil';

export const statusSentenceAtom = atomFamily({
  key: 'STATUS_SENTENCE_ATOM',
  default: [],
});
