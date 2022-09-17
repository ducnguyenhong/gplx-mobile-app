import { useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import { useCallback } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRecoilState } from 'recoil';
import { selectedLicenseAtom } from 'state-management/selected-license';
import { LICENSE_DATA } from './select-license.data';
import { styles } from './select-lisence.style';

const SelectLicense = () => {
  const navigation = useNavigation();
  const [selectedLicense, setSelectedLicense] =
    useRecoilState(selectedLicenseAtom);

  const onSelectLicense = useCallback(
    value => {
      setSelectedLicense(value);
      navigation.goBack();
    },
    [navigation, setSelectedLicense],
  );

  return (
    <SafeAreaView>
      <NavigationBar title="Chọn bằng lái xe ôn thi" showBack={false} />
      <FlatList
        data={LICENSE_DATA}
        keyExtractor={item => item.value}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor="#F0F0F5"
            style={[
              styles.thItem,
              {
                backgroundColor:
                  item.value === selectedLicense ? '#98EB9D' : '#FFF',
              },
            ]}
            onPress={() => onSelectLicense(item.value)}>
            <View style={styles.vItem}>
              <View style={styles.vItemIcon}>
                <FontAwesome5 name={item.icon} color="#24a85d" size={18} />
              </View>
              <View style={styles.vItemContent}>
                <Text style={styles.tItemTitle}>{item.title}</Text>
                <Text style={styles.tItemDescription}>{item.desciption}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </SafeAreaView>
  );
};

export default SelectLicense;
