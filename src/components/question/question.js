import Text from 'components/text';
import { memo, useCallback, useState } from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './question.style';

const getCheckBoxColor = (index, selectedAnswer, correctAnswer) => {
  if (correctAnswer && correctAnswer === index) {
    return 'green';
  }
  return index === selectedAnswer ? 'orange' : 'gray';
};

const getCheckBoxIcon = (index, selectedAnswer, correctAnswer) => {
  if (correctAnswer && correctAnswer === index) {
    return 'check-circle';
  }

  return index === selectedAnswer
    ? 'check-circle'
    : 'checkbox-blank-circle-outline';
};

const Question = ({ data }) => {
  const { question, answers, defaultData } = data;
  const [selectedAnswer, setSelectedAnswer] = useState();
  const { correctAnswer, explainAnswer } = defaultData || {};

  const onSelectAnswer = useCallback(
    index => {
      if (defaultData) {
        return;
      }
      setSelectedAnswer(index !== selectedAnswer ? index : undefined);
    },
    [selectedAnswer, defaultData],
  );

  return (
    <View style={styles.vItem}>
      <Text style={styles.tQuestion}>{question}</Text>

      <FlatList
        data={answers}
        keyExtractor={(_, index) => index}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            style={styles.toAnswer}
            underlayColor={defaultData ? '#FFF' : '#F0F0F5'}
            activeOpacity={defaultData ? 1 : 0.8}
            onPress={() => onSelectAnswer(index)}>
            {/* check-circle */}
            <View style={styles.vAnswer}>
              <MCIcon
                name={getCheckBoxIcon(index + 1, selectedAnswer, correctAnswer)}
                size={25}
                color={getCheckBoxColor(
                  index + 1,
                  selectedAnswer,
                  correctAnswer,
                )}
              />
              <Text
                style={
                  correctAnswer && correctAnswer === index + 1
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
