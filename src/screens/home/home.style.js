import { Dimensions, StyleSheet } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  savMain: {
    backgroundColor: '#FFF',
    flex: 1,
  },

  vMain: {
    paddingVertical: 6,
  },

  toMenuItem: {
    marginBottom: 10,
    height: (windowHeight * 21.1) / 100,
    width: '47.5%',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  vMenuIcon: {
    height: 70,
  },

  tMenuItem: {
    color: '#FFF',
    fontSize: 18,
  },
});
