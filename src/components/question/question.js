import Text from 'components/text';
import { memo, useCallback, useState } from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './question.style';

const Question = ({ data }) => {
  const { question, answers, readOnly } = data;
  const [selectedAnswer, setSelectedAnswer] = useState();

  const onSelectAnswer = useCallback(
    index => {
      setSelectedAnswer(index !== selectedAnswer ? index : undefined);
    },
    [selectedAnswer],
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
            underlayColor="#F0F0F5"
            activeOpacity={0.8}
            onPress={() => onSelectAnswer(index)}>
            {/* check-circle */}
            <View style={styles.vAnswer}>
              <MCIcon
                name={
                  index === selectedAnswer
                    ? 'check-circle'
                    : 'checkbox-blank-circle-outline'
                }
                size={25}
                color={index === selectedAnswer ? 'orange' : 'gray'}
              />
              <Text style={styles.tAnswer}>{item}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default memo(Question);
