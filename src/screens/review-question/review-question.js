import NavigationBar from 'components/navigation-bar';
import Question from 'components/question';
import Text from 'components/text';
import { SafeAreaView, View } from 'react-native';
import { styles } from './review-question.style';

const testData = {
  question: 'Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi Câu hỏi',
  answers: [
    {
      content: 'Dap an A',
      value: 1,
    },
    {
      content: 'Dap an B',
      value: 2,
    },
    {
      content: 'Dap an C',
      value: 3,
    },
    {
      content: 'Dap an D',
      value: 4,
    },
  ],
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
