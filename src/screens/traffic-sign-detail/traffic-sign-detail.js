import { useRoute } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { Image, SafeAreaView, View } from 'react-native';
import { styles } from './traffic-sign-detail.style';

const TrafficSignDetail = () => {
  const route = useRoute()
  const {icon, code, name, content} = route.params || {}

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title={"Biển "+ code + ": " + name} titleStyle={styles.titleStyle} statusBarStyle={styles.statusBarStyle} />
      <View style={styles.trafficSignContainer}>
        <Text style={styles.trafficSignTitle}>Biển {code}: {name}</Text>
        <Image source={{uri: icon}} style={styles.trafficSignIcon} />
        <Text style={styles.trafficSignContent}>{content}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TrafficSignDetail
