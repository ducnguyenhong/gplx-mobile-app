import Text from 'components/text';
import { memo, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Fa5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './collapse-list.style';

const CollapseList = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <View>
      <View style={styles.vControl}>
        <View style={styles.vControlLeft}>
          <TouchableOpacity activeOpacity={0.8} style={styles.toControlSide}>
            <Fa5Icon name="chevron-left" color="#FFF" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.vControlCenter}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.toControlCenter}
            onPress={() => setIsCollapsed(!isCollapsed)}>
            <Fa5Icon
              name={isCollapsed ? 'chevron-up' : 'chevron-down'}
              color="#FFF"
              size={18}
            />
            <Text style={styles.tControlCenter}>60 câu hỏi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.vControlRight}>
          <TouchableOpacity activeOpacity={0.8} style={styles.toControlSide}>
            <Fa5Icon name="chevron-right" color="#FFF" size={18} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.vQuestionList}>
        <Collapsible collapsed={isCollapsed}>
          <FlatList
            key={'_'}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            numColumns={6}
            keyExtractor={item => `${item}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.toQuestionItem}>
                <Text style={styles.tQuestionItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </Collapsible>
      </View>
    </View>
  );
};

export default memo(CollapseList);
