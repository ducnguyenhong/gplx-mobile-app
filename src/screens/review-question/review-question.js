import NavigationBar from 'components/navigation-bar';
import Question from 'components/question';
import Text from 'components/text';
import { SafeAreaView, View } from 'react-native';
import { styles } from './review-question.style';

const testData = {
  question: 'Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi',
  answers: ['1. Dap an 1', '2. Dap an 2', '3. Dap an 3'],
};

const ReviewQuestion = () => {
  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title="Ôn tập các câu hỏi" />
      <View>
        <Text>Màn Ôn tập các câu hỏi</Text>
      </View>
      <Question data={testData} />
    </SafeAreaView>
  );
};

export default ReviewQuestion;
