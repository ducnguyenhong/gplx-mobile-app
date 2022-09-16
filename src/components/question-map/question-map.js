import Text from 'components/text';
import { memo } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { statusSentenceAtom } from '../take-exam/recoil/status-sentence';
import { styles } from './question-map.style';
import QuestionMapTimer from './question-map.timer';

const getMapBgColor = (index, currentQuestionIndex, statusSentences) => {
  const currentQuestion = statusSentences.find(item => item.id === index);
  if (currentQuestion?.status === false) {
    return 'red';
  }
  if (currentQuestion?.status === true) {
    return 'green';
  }
  if (currentQuestionIndex === index) {
    return 'orange';
  }
  return '#bae0f7';
};

const QuestionMap = ({ questionList, currentQuestionIndex, examKey }) => {
  const statusSentences = useRecoilValue(statusSentenceAtom(examKey));

  return (
    <View style={styles.vMain}>
      <View style={styles.vLeft}>
        <View>
          <FlatList
            data={questionList}
            key="_"
            keyExtractor={item => `${item.id}`}
            numColumns={Math.round(questionList.length / 2)}
            renderItem={({ index }) => (
              <View
                style={[
                  styles.vItem,
                  {
                    backgroundColor: getMapBgColor(
                      index,
                      currentQuestionIndex,
                      statusSentences,
                    ),
                  },
                ]}
              />
            )}
          />
        </View>

        <Text style={styles.tQuestion}>
          {currentQuestionIndex}/{questionList.length}
        </Text>
      </View>

      <QuestionMapTimer />
    </View>
  );
};

export default memo(QuestionMap);
