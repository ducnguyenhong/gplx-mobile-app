import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  savMain: { flex: 1, backgroundColor: '#FFF' },

  toBtnCheckAnswer: {
    backgroundColor: '#06ac64',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  tBtnCheckAnswer: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
  },
});
