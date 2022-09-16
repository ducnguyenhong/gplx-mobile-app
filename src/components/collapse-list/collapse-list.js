import Text from 'components/text';
import { memo, useCallback, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './collapse-list.style';

const CollapseList = props => {
  const { questionList, onSelectQuestion, currentQuestionIndex } = props;
  const [showList, setShowList] = useState(false);

  const onSelect = useCallback(
    (key, index) => {
      setShowList(false);
      onSelectQuestion(key, index);
    },
    [onSelectQuestion],
  );

  const onPrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setShowList(false);
      onSelectQuestion(undefined, currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex, onSelectQuestion]);

  const onNext = useCallback(() => {
    if (currentQuestionIndex + 1 <= questionList.length) {
      setShowList(false);
      onSelectQuestion(undefined, currentQuestionIndex + 1);
    }
  }, [currentQuestionIndex, onSelectQuestion, questionList]);

  return (
    <View>
      <View style={styles.vControl}>
        <View style={styles.vControlLeft}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.toControlSide}
            onPress={onPrev}>
            <Fa5Icon name="chevron-left" color="#FFF" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.vControlCenter}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.toControlCenter}
            onPress={() => setShowList(!showList)}>
            <Fa5Icon
              name={showList ? 'chevron-down' : 'chevron-up'}
              color="#FFF"
              size={18}
            />
            <Text style={styles.tControlCenter}>
              {questionList.length} câu hỏi
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vControlRight}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.toControlSide}
            onPress={onNext}>
            <Fa5Icon name="chevron-right" color="#FFF" size={18} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.vQuestionList}>
        <Collapsible collapsed={!showList}>
          <FlatList
            key={'_'}
            data={questionList}
            numColumns={6}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => onSelect(item.id, index)}
                activeOpacity={0.8}
                style={styles.toQuestionItem}>
                <Text style={styles.tQuestionItem}>{item.id}</Text>
              </TouchableOpacity>
            )}
          />
        </Collapsible>
      </View>
    </View>
  );
};

export default memo(CollapseList);
