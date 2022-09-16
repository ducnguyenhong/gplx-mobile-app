import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vControl: {
    backgroundColor: '#1687CB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  vControlLeft: {
    flex: 1 / 3,
  },

  vControlRight: {
    flex: 1 / 3,
    alignItems: 'flex-end',
  },

  vControlCenter: {
    flex: 1 / 3,
    justifyContent: 'center',
  },

  toControlSide: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
  },

  toControlCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },

  tControlCenter: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 10,
  },

  vQuestionList: {
    backgroundColor: '#F2F2F2',
  },

  toQuestionItem: {
    backgroundColor: '#09aa89',
    width: '15%',
    padding: 6,
    borderRadius: 8,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tQuestionItem: {
    fontSize: 24,
  },
});
