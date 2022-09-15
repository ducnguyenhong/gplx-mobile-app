import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  savMain: {
    backgroundColor: '#FFF',
    flex: 1
  },
  titleStyle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600'
  },  
  statusBarStyle: {
    backgroundColor: '#3498db'
  },
  trafficSign: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    alignItems: 'center'
  },
  trafficSignIconBox: {
    flex: 1,
    paddingRight: 4,
  },
  trafficSignIcon: {
    width: 120,
    height: 120
  },
  trafficSignContent: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  tsCode: {
    color: '#3498db',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 8
  },
  tsName: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 4
  },
  tsContent: {

  }
});