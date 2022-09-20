import { StackActions, useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View
} from 'react-native';
import { Bar } from 'react-native-progress';
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

const DATA = [
  {
    title: 'Toàn bộ câu hỏi trong bộ đề thi',
    description: 'Toàn bộ 200 câu hỏi gồm 20 câu điểm liệt',
    total: 200,
    done: 11,
  },
  {
    title: 'Toàn bộ câu hỏi trong bộ đề thi',
    description: 'Toàn bộ 200 câu hỏi gồm 20 câu điểm liệt',
    total: 200,
    done: 100,
  },
  {
    title: 'Toàn bộ câu hỏi trong bộ đề thi',
    description: 'Toàn bộ 200 câu hỏi gồm 20 câu điểm liệt',
    total: 200,
    done: 1,
  },
  {
    title: 'Toàn bộ câu hỏi trong bộ đề thi',
    description: 'Toàn bộ 200 câu hỏi gồm 20 câu điểm liệt',
    total: 200,
    done: 0,
  },
];

const ReviewQuestion = () => {
  const navigation = useNavigation();
  const widthProgress = Dimensions.get('window').width * 0.7;

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title="Ôn tập các câu hỏi" />
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => `${item + index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // navigation.navigate('ReviewQuestionDetail', { id: item.done })

              const pushAction = StackActions.push('ReviewQuestionDetail', {
                id: item.done,
              });
              navigation.dispatch(pushAction);
            }}>
            <View style={styles.reviewItem}>
              <Text style={styles.itemHeader}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <View style={styles.itemProgress}>
                <Bar
                  progress={item.done / item.total}
                  width={widthProgress}
                  height={8}
                  color="#2ecc71"
                  unfilledColor="#ccc"
                  borderColor="#ccc"
                  style={{ height: 8 }}
                />
                <Text style={styles.itemCount}>
                  {item.done} / {item.total}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* <Question data={testData} /> */}
    </SafeAreaView>
  );
};

export default ReviewQuestion;
