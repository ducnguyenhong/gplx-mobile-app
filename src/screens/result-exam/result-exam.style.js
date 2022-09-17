import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  savMain: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  vInfoItem: {
    flex: 1 / 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  tResult: {
    backgroundColor: 'pink',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: 'red',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '600',
    color: 'red',
  },

  vStatistic: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },

  vStatisticItem: {
    flex: 1 / 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  tStatistic: {
    color: 'blue',
    fontSize: 16,
    marginLeft: 10,
  },

  toQuestion: {
    backgroundColor: '#f2f2f2',
    margin: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b3b3b3',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24%',
    height: 65,
  },

  vDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F2F2F2',
    marginVertical: 10,
  },
});
