import Text from 'components/text';
import { memo, useCallback, useState } from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilValue } from 'recoil';
import { checkedAnswerAtom } from '../take-exam/recoil/checked-answer';
import { statusSentenceAtom } from '../take-exam/recoil/status-sentence';
import {
  getCheckBoxColor,
  getCheckBoxIcon,
  getTextAnswerStyle
} from './question.helper';
import { styles } from './question.style';

const Question = props => {
  const { data, readOnly, getCurrentAnswer, examKey } = props;
  const { question, answers, correctAnswer, explainAnswer } = data;
  const [selectedAnswer, setSelectedAnswer] = useState();
  const statusSentences = useRecoilValue(statusSentenceAtom(examKey));
  const checkStatus = statusSentences.find(item => item.id === data.id);
  const isChooseCorrect = checkStatus?.status;
  const checkedAnswer = useRecoilValue(
    checkedAnswerAtom(`${examKey}_${data.id}`),
  );

  const onSelectAnswer = useCallback(
    (item, index, selectedAnswer) => {
      if (readOnly || checkedAnswer) {
        return;
      }
      getCurrentAnswer && getCurrentAnswer(item, index, data.id, index !== selectedAnswer ? index : undefined);

      setSelectedAnswer(index !== selectedAnswer ? index : undefined);
    },
    [readOnly, getCurrentAnswer, data.id, selectedAnswer, checkedAnswer],
  );

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
