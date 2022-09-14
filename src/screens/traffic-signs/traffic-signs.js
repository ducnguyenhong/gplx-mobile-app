import { useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { useCallback } from 'react';
import { SafeAreaView, SectionList, TouchableOpacity, View } from 'react-native';
import { styles } from './review-question.style';

const TrafficSigns = () => {
  const navigation = useNavigation()

  const onOpenTrafficSign = useCallback((id) => {
    navigation.navigate('TrafficSignDetail', {id})
  }, [navigation])

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title="Các biển báo"/>
      <View>
        <SectionList
          data={[1,2,3,4]}
          keyExtractor={item => `${item}`}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={1} style={{marginBottom: 10}} onPress={(item) => onOpenTrafficSign(item)}>
              <Text>Biển số {item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TrafficSigns
