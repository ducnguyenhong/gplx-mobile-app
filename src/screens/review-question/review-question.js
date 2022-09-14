import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { SafeAreaView, View } from 'react-native';
import { styles } from './review-question.style';

const ReviewQuestion = () => {
  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title="Ôn tập các câu hỏi"/>
      <View>
        <Text>Màn Ôn tập các câu hỏi</Text>
      </View>
    </SafeAreaView>
  );
};

export default ReviewQuestion
