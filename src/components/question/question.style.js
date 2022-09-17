import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vItem: {
    paddingHorizontal: 6,
  },

  tQuestion: {
    fontWeight: '600',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 5,
  },

  vAnswer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    paddingVertical: 10,
  },

  tAnswer: {
    fontSize: 16,
    marginLeft: 5,
  },

  tAnswerCorrect: {
    fontSize: 16,
    marginLeft: 5,
    color: 'green',
    fontWeight: '600',
  },

  tAnswerWrong: {
    fontSize: 16,
    marginLeft: 5,
    color: 'red',
    fontWeight: '600',
  },

  vExplain: {
    backgroundColor: '#ffffb3',
    marginTop: 10,
    padding: 5,
    paddingBottom: 10,
  },

  vExplainLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tExplainLabel: {
    color: 'red',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 5,
  },

  tExplainContent: {
    fontSize: 16,
    marginTop: 3,
  },
});
