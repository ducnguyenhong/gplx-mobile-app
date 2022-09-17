import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  vModal: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
  },

  tTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  thItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  tItemTitle: {
    fontSize: 16,
    marginLeft: 20,
  },

  vControl: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },

  thCancel: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  tControl: {
    color: 'blue',
    textTransform: 'uppercase',
  },

  thConfirm: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
