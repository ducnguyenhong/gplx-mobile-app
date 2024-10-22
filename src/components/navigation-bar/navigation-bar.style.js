import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vMain: {
    height: 54,
    backgroundColor: '#1687CB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#E6E6E6',
  },

  vWrapperLeftCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  vLeft: {},

  toBack: {
    paddingHorizontal: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgIconBack: {
    width: 7,
  },

  vCenter: {
    flex: 1,
    marginLeft: 10,
  },

  tTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    // fontFamily: 'Averta-Semibold',
  },

  vRight: {
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
});
