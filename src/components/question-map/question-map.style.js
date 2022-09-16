import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vMain: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1687CB',
    padding: 6,
  },

  vLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },

  tTime: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
  },

  tQuestion: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
    marginLeft: 5,
    marginTop: -5,
  },

  vItem: {
    width: 9,
    height: 9,

    marginRight: 4,
    marginBottom: 4,
  },
});
