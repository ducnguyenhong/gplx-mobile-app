import Text from 'components/text';
import { memo, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

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
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <View style={{ backgroundColor: '#1687CB', padding: 6 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <View>
            <FlatList
              data={questionList}
              key="_"
              keyExtractor={item => `${item.key}`}
              numColumns={Math.round(questionList.length / 2)}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    width: 9,
                    height: 9,
                    backgroundColor: getMapBgColor(index, currentQuestionIndex),
                    marginRight: 4,
                    marginBottom: 4,
                  }}
                />
              )}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#FFF',
              marginLeft: 5,
              marginTop: -5,
            }}>
            {1}/{questionList.length}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#FFF',
          }}>
          {minutes}:{seconds}
        </Text>
      </View>
    </View>
  );
};

export default memo(QuestionMap);
