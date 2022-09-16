import CollapseList from 'components/collapse-list';
import Question from 'components/question';
import { memo } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useRecoilState } from 'recoil';
import { indexSentenceAtom } from '../recoil/index-sentence';

const TabScreen = ({ questionList, readOnly }) => {
  const [tabIndex, setTabIndex] = useRecoilState(indexSentenceAtom);
  const currentQuestion = questionList.find(item => item.id === tabIndex);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Question data={currentQuestion} readOnly={readOnly} />
      </ScrollView>
      {readOnly && (
        <CollapseList
          questionList={questionList}
          currentQuestionIndex={tabIndex}
          onSelectQuestion={(tab, index) => setTabIndex(index)}
        />
      )}
    </SafeAreaView>
  );
};

export default memo(TabScreen);
