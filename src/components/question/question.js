import Text from 'components/text';
import { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { checkedAnswerAtom } from '../take-exam/recoil/checked-answer';
import { selectedAnswerListAtom } from '../take-exam/recoil/selected-answer';
import { statusSentenceAtom } from '../take-exam/recoil/status-sentence';
import {
  getCheckBoxColor,
  getCheckBoxIcon,
  getTextAnswerStyle
} from './question.helper';
import { styles } from './question.style';

const Question = props => {
  const { data, readOnly, getCurrentAnswer, examKey, defaultData } = props;
  const { question, answers, correctAnswer, explainAnswer } = data;
  const [selectedAnswerList, setSelectedAnswerList] = useRecoilState(
    selectedAnswerListAtom,
  );
  const defaultSelected = selectedAnswerList.find(item => item.id === data.id);
  const [selectedAnswer, setSelectedAnswer] = useState(
    defaultSelected?.value || undefined,
  );
  const statusSentences = useRecoilValue(statusSentenceAtom(examKey));
  const checkStatus = statusSentences.find(
    item => item.id === (defaultData?.id || data.id),
  );
  const isChooseCorrect = checkStatus?.status;
  const checkedAnswer = useRecoilValue(
    checkedAnswerAtom(`${examKey}_${data.id}`),
  );

  const onSelectAnswer = useCallback(
    (item, index, selectedAnswer) => {
      if (readOnly || checkedAnswer || defaultData) {
        return;
      }
      getCurrentAnswer &&
        getCurrentAnswer(
          item,
          index,
          data.id,
          index !== selectedAnswer ? index : undefined,
        );

      setSelectedAnswer(index !== selectedAnswer ? index : undefined);
      setSelectedAnswerList(prev => {
        const curr = prev.find(itemPrev => itemPrev.id === data.id);
        if (curr) {
          return prev.map(itemPrev =>
            itemPrev.id === data.id ? { id: data.id, value: item.value } : item,
          );
        }
        return [...prev, { id: data.id, value: item.value }];
      });
    },
    [
      readOnly,
      checkedAnswer,
      defaultData,
      getCurrentAnswer,
      data.id,
      setSelectedAnswerList,
    ],
  );

  useEffect(() => {
    if (defaultSelected) {
      setSelectedAnswer(defaultSelected.value);
    }
  }, [defaultSelected]);

  useEffect(() => {
    if (defaultData && !selectedAnswerList.length) {
      const currQuestion = statusSentences.find(
        item => item.id === defaultData?.id,
      );
      setSelectedAnswer(currQuestion.id);
    }
  }, [defaultData, selectedAnswerList.length, statusSentences]);

  return (
    <View style={styles.vItem}>
      <Text style={styles.tQuestion}>{question}</Text>

      <FlatList
        data={answers}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            style={styles.toAnswer}
            underlayColor={readOnly ? '#FFF' : '#F0F0F5'}
            activeOpacity={readOnly ? 1 : 0.8}
            onPress={() => onSelectAnswer(item, index, selectedAnswer)}>
            {/* check-circle */}
            <View style={styles.vAnswer}>
              <MCIcon
                name={getCheckBoxIcon(
                  index,
                  selectedAnswer,
                  correctAnswer,
                  isChooseCorrect,
                  readOnly,
                )}
                size={25}
                color={getCheckBoxColor(
                  index,
                  selectedAnswer,
                  correctAnswer,
                  isChooseCorrect,
                  readOnly,
                )}
              />
              <Text
                style={getTextAnswerStyle(
                  styles.tAnswer,
                  styles.tAnswerCorrect,
                  styles.tAnswerWrong,
                  correctAnswer,
                  index,
                  readOnly,
                  isChooseCorrect,
                  checkedAnswer,
                  selectedAnswer,
                )}>
                {item.content}
              </Text>
            </View>
          </TouchableHighlight>
        )}
      />

      {((!!explainAnswer && checkedAnswer) ||
        (!!explainAnswer && readOnly)) && (
        <View style={styles.vExplain}>
          <View style={styles.vExplainLabel}>
            <MCIcon name="lightbulb-on" size={24} color="red" />
            <Text style={styles.tExplainLabel}>Giải thích đáp án</Text>
          </View>
          <Text style={styles.tExplainContent}>{explainAnswer}</Text>
        </View>
      )}
    </View>
  );
};

export default memo(Question);
