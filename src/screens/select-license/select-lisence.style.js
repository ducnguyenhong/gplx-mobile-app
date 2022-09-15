import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  thItem: {
    borderBottomWidth: 1,
    borderColor: '#CCC',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  vItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vItemIcon: {
    width: 25,
    alignItems: 'center',
  },

  vItemContent: {
    marginLeft: 10,
  },

  tItemTitle: {
    textTransform: 'uppercase',
    marginBottom: 4,
  },
});
