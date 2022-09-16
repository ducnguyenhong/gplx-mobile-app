import Text from 'components/text';
import { memo, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './question-map.style';

const getMapBgColor = (index, currentQuestionIndex) => {
  if (currentQuestionIndex === index) {
    return 'orange';
  }
  return '#bae0f7';
};

const QuestionMap = ({ questionList, currentQuestionIndex }) => {
  const [minutes, setMinutes] = useState(22);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(myInterval);
  });

  return (
    <View style={styles.vMain}>
      <View style={styles.vLeft}>
        <View>
          <FlatList
            data={questionList}
            key="_"
            keyExtractor={item => `${item.key}`}
            numColumns={Math.round(questionList.length / 2)}
            renderItem={({ index }) => (
              <View
                style={[
                  styles.vItem,
                  {
                    backgroundColor: getMapBgColor(index, currentQuestionIndex),
                  },
                ]}
              />
            )}
          />
        </View>

        <Text style={styles.tQuestion}>
          {1}/{questionList.length}
        </Text>
      </View>

      <Text style={styles.tTime}>
        {minutes}:{`${seconds}`.length === 2 ? seconds : `0${seconds}`}
      </Text>
    </View>
  );
};

export default memo(QuestionMap);
