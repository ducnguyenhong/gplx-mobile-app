import { useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { useCallback } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { styles } from './home.style';

const Home = () => {
  const navigation = useNavigation()

  const onOpenScreen = useCallback((screen) => {
    navigation.navigate(screen)
  }, [navigation])

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title="600 câu GPLX Bằng ABC"/>
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onOpenScreen('TrafficSigns')}>
          <Text>Các biển báo</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={{marginTop: 30}} onPress={() => onOpenScreen('ReviewQuestion')}>
          <Text>Ôn tập câu hỏi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
