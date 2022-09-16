import CollapseList from 'components/collapse-list';
import Question from 'components/question';
import Text from 'components/text';
import { memo, useCallback, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { indexSentenceAtom } from '../recoil/index-sentence';
import { statusSentenceAtom } from '../recoil/status-sentence';

const TabScreen = ({ questionList, readOnly, examKey }) => {
  const [tabIndex, setTabIndex] = useRecoilState(indexSentenceAtom);
  const currentQuestion = questionList.find(item => item.id === tabIndex);
  const [showButtonAnswer, setShowButtonAnswer] = useState(false);
  const [answered, setAnswered] = useState();
  const [answereduestionIndex, setAnsweredQuestionIndex] = useState();
  const setStatusSentences = useSetRecoilState(statusSentenceAtom(examKey));

  const getCurrentAnswer = useCallback((item, index, questionIndex) => {
    if (typeof index === 'number') {
      setShowButtonAnswer(true);
    }
    setAnswered(item);
    setAnsweredQuestionIndex(questionIndex);
  }, []);

  const onCheckAnswer = useCallback(() => {
    if (answered) {
      setStatusSentences(prev =>
        prev.map(item => {
          if (item.id === answereduestionIndex) {
            return {
              id: item.id,
              status: currentQuestion.correctAnswerWhenCheck === answered.value,
            };
          }
          return item;
        }),
      );
    }
  }, [
    answered,
    answereduestionIndex,
    currentQuestion.correctAnswerWhenCheck,
    setStatusSentences,
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ flex: 1 }}>
        <Question
          examKey={examKey}
          data={currentQuestion}
          readOnly={readOnly}
          getCurrentAnswer={getCurrentAnswer}
        />
      </View>
      {readOnly && (
        <CollapseList
          questionList={questionList}
          currentQuestionIndex={tabIndex}
          onSelectQuestion={(tab, index) => setTabIndex(index)}
        />
      )}

      {showButtonAnswer && (
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity
            onPress={onCheckAnswer}
            activeOpacity={0.8}
            style={{
              backgroundColor: '#06ac64',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 20,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 50,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            }}>
            <Ionicon name="checkmark" color="#FFF" size={20} />
            <Text
              style={{
                color: '#FFF',
                textTransform: 'uppercase',
                fontSize: 15,
                fontWeight: '600',
                marginLeft: 10,
              }}>
              Đáp án
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default memo(TabScreen);
