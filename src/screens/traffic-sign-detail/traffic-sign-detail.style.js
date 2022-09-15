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
  trafficSignContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  trafficSignTitle: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: '700'
  },
  trafficSignIcon: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 12
  },
  trafficSignContent: {
    fontSize: 16
  }
});