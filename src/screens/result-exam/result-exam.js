import { useRoute } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { memo } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './result-exam.style';

const ResultExam = props => {
  const route = useRoute();
  const { title, data, examKey } = route.params || {};
  const { questionList, time } = data || {};

  return (
    <SafeAreaView style={styles.savMain}>
      <NavigationBar title={`Kết quả ${title}`} />

      <Text style={styles.tResult}>Không đạt</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.vInfoItem}>
          <MCIcon name="timer-outline" size={25} color="blue" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginLeft: 10,
            }}>
            00:03
          </Text>
        </View>

        <View style={styles.vInfoItem}>
          <MCIcon name="briefcase-check" size={25} color="green" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginLeft: 10,
              color: 'red',
            }}>
            1/45
          </Text>
        </View>

        <View style={styles.vInfoItem}>
          <MCIcon name="star-circle" size={25} color="red" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              marginLeft: 10,
              color: 'green',
            }}>
            Câu 10
          </Text>
        </View>
      </View>

      <View style={styles.vStatistic}>
        <View style={styles.vStatisticItem}>
          <MCIcon name="sigma" size={25} color="black" />
          <Text style={styles.tStatistic}>45</Text>
        </View>
        <View style={styles.vStatisticItem}>
          <MCIcon name="check-circle" size={25} color="green" />
          <Text style={styles.tStatistic}>1</Text>
        </View>
        <View style={styles.vStatisticItem}>
          <MCIcon name="close-circle" size={25} color="red" />
          <Text style={styles.tStatistic}>1</Text>
        </View>
        <View style={styles.vStatisticItem}>
          <MCIcon name="information" size={25} color="gray" />
          <Text style={styles.tStatistic}>43</Text>
        </View>
      </View>

      <View style={styles.vDivider} />

      <FlatList
        data={Array.from(Array(45).keys())}
        keyExtractor={item => `${item}`}
        key="_"
        contentContainerStyle={{ marginHorizontal: 10, paddingBottom: 30 }}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.toQuestion}>
            <Text style={{ marginBottom: 3 }}>Câu {item}</Text>
            <MCIcon
              // name={() => {
              //   if (item % 2 === 0) {
              //     return 'check-circle';
              //   }
              //   if (item % 3 === 0) {
              //     return 'close-circle';
              //   }
              //   return 'information';
              // }}
              name="check-circle"
              size={25}
              color="green"
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default memo(ResultExam);
