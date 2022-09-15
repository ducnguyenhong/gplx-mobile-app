import { useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { useCallback } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRecoilValue } from 'recoil';
import { selectedLicenseAtom } from 'state-management/selected-license';
import { HOME_MENU } from './home.data';
import { styles } from './home.style';

const Home = () => {
  const navigation = useNavigation();
  const selectedLicense = useRecoilValue(selectedLicenseAtom);

  const onOpenScreen = useCallback(
    screen => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  const onOpenSetting = useCallback(() => {
    console.log('ducnh');
    navigation.navigate('SelectLicense');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar
        title={`600 câu GPLX Bằng ${selectedLicense}`}
        showBack={false}
        NavigationRight={
          <TouchableOpacity activeOpacity={0.8} onPress={onOpenSetting}>
            <FontAwesome5 name="cog" size={20} color="#FFF" />
          </TouchableOpacity>
        }
      />
      <View style={styles.vMain}>
        <FlatList
          data={HOME_MENU}
          contentContainerStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          numColumns={2}
          keyExtractor={item => item.route}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.toMenuItem, { backgroundColor: item.bgColor }]}
              activeOpacity={0.8}
              onPress={() => onOpenScreen(item.route)}>
              <View style={styles.vMenuIcon}>{item.icon}</View>
              <Text style={styles.tMenuItem}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
