import { useRoute } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { SafeAreaView, View } from 'react-native';
import { styles } from './traffic-sign-detail.style';

const TrafficSignDetail = () => {
  const route = useRoute()
  const {id} = route.params || {}

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title="Biển báo chi tiết"/>
      <View>
        <Text>Biển báo chi tiết số {id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TrafficSignDetail
