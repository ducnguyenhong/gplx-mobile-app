import Text from 'components/text';
import { memo, useCallback, useState } from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilValue } from 'recoil';
import { statusSentenceAtom } from '../take-exam/recoil/status-sentence';
import { styles } from './question.style';

const getCheckBoxColor = (index, selectedAnswer, correctAnswer, status) => {
  if (status === false) {
    return 'red';
  }
  if ((correctAnswer && correctAnswer === index) || status) {
    return 'green';
  }
  return index === selectedAnswer ? 'orange' : 'gray';
};

const getCheckBoxIcon = (index, selectedAnswer, correctAnswer, status) => {
  if (correctAnswer && correctAnswer === index) {
    return 'check-circle';
  }

  return index === selectedAnswer
    ? 'check-circle'
    : 'checkbox-blank-circle-outline';
};

const Question = props => {
  const { data, readOnly, getCurrentAnswer, status, examKey } = props;
  const {
    question,
    answers,
    correctAnswer,
    correctAnswerWhenCheck,
    explainAnswer,
  } = data;
  const [selectedAnswer, setSelectedAnswer] = useState();
  const statusSentences = useRecoilValue(statusSentenceAtom(examKey));

  const checkStatus = statusSentences.find(item => item.id === data.id);

  const onSelectAnswer = useCallback(
    (item, index) => {
      if (readOnly) {
        return;
      }
      getCurrentAnswer && getCurrentAnswer(item, index, data.id);

      setSelectedAnswer(index !== selectedAnswer ? index : undefined);
    },
    [readOnly, getCurrentAnswer, data.id, selectedAnswer],
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
            onPress={() => onSelectAnswer(item, index)}>
            {/* check-circle */}
            <View style={styles.vAnswer}>
              <MCIcon
                name={getCheckBoxIcon(
                  index,
                  selectedAnswer,
                  correctAnswer,
                  status,
                )}
                size={25}
                color={getCheckBoxColor(
                  index,
                  selectedAnswer,
                  correctAnswer,
                  status,
                )}
              />
              <Text
                style={
                  correctAnswer && correctAnswer === index
                    ? styles.tAnswerCorrect
                    : styles.tAnswer
                }>
                {item.content}
              </Text>
            </View>
          </TouchableHighlight>
        )}
      />

      {!!explainAnswer && (
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
