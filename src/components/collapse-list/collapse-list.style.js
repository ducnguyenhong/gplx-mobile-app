import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vControl: {
    backgroundColor: '#1687CB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  vControlLeft: {
    flex: 1 / 5,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },

  vControlRight: {
    flex: 1 / 5,
    alignItems: 'flex-end',
    paddingRight: 10,
  },

  vControlCenter: {
    flex: 3 / 5,
  },

  toControlSide: {
    borderWidth: 1,
    borderColor: '#737373',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  toControlCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    justifyContent: 'center',
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
    fontSize: 22,
  },
});
