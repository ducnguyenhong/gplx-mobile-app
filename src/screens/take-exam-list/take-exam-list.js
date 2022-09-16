import { useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRecoilValue } from 'recoil';
import { selectedLicenseAtom } from 'state-management/selected-license';
import { EXAM_LIST } from './take-exam-list.data';
// playlist-remove

const TakeExamList = () => {
  const selectedLicense = useRecoilValue(selectedLicenseAtom);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#d9d9d9' }}>
      <NavigationBar title={`Đề thi Bằng ${selectedLicense}`} />
      <FlatList
        data={EXAM_LIST}
        keyExtractor={item => `${item.id}`}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TakeExamDetail')}
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 15,
              marginHorizontal: 3,
              marginBottom: 0,
              marginTop: 5,
              backgroundColor: '#FFF',
              width: '31.5%',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#828282',
              }}>
              Đề thi số
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                marginTop: 10,
                color: '#4d4d4d',
              }}>
              {item.value}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default TakeExamList;
