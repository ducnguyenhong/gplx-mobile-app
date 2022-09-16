import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  savMain: {
    backgroundColor: '#FFF',
    flex: 1
  },
  reviewItem: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemHeader: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '700'
  },  
  itemDescription: {
    fontSize: 16,
    lineHeight: 24
  },
  itemProgress: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  itemCount: {
    color: '#2ecc71',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right'
  }
});
