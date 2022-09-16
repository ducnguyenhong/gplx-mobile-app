import CollapseList from 'components/collapse-list';
import Question from 'components/question';
import { memo } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useRecoilState } from 'recoil';
import { selectedSentenceAtom } from '../recoil/selected-sentence';

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
  defaultData: {
    correctAnswer: 3,
    explainAnswer: 'Giai thich dap an Giai thich dap an',
  },
};

const TabScreen = ({ questionList }) => {
  const [activeTab, setActiveTab] = useRecoilState(selectedSentenceAtom);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Question data={testData} />
      </ScrollView>
      <CollapseList
        questionList={questionList}
        currentQuestionIndex={activeTab}
        onSelectQuestion={(tab, index) => setActiveTab(index)}
      />
    </SafeAreaView>
  );
};

export default memo(TabScreen);
