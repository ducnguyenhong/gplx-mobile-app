import Text from 'components/text';
import { memo } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { indexSentenceAtom } from '../../recoil/index-sentence';

const QuestionDrawer = ({ onClose }) => {
  const [tabIndex, setTabIndex] = useRecoilState(indexSentenceAtom);

  return (
    <View style={{ backgroundColor: '#FFF', height: '100%' }}>
      <View style={{ height: 60, backgroundColor: '#1687CB' }} />

      <FlatList
        data={Array.from(Array(45).keys())}
        key="_"
        keyExtractor={item => `${item}`}
        contentContainerStyle={{ padding: 5 }}
        numColumns={3}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setTabIndex(index);
              onClose();
            }}
            activeOpacity={0.8}
            style={{
              backgroundColor: tabIndex === index ? 'orange' : '#ccf2ff',
              margin: 2,
              paddingVertical: 7,
              paddingHorizontal: 10,
              borderRadius: 3,
              width: '32%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default memo(QuestionDrawer);
