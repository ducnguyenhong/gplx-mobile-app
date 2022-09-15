import { useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { useCallback, useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';
import DefaultImage from './images/P101.png';
import { styles } from './traffic-signs.style';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const trafficList = [
  {
    icon: DEFAULT_IMAGE,
    code: 'P.101',
    name: 'Đường cấm',
    content:
      'Biển báo đường cấm tất cả các loại phương tiện tham gia giao thông đi lại cả hai hướng, trừ xe ưu tiên theo luật định.',
  },
  {
    icon: DEFAULT_IMAGE,
    code: 'P.102',
    name: 'Đường cấm',
    content:
      'Biển báo đường cấm tất cả các loại phương tiện tham gia giao thông đi lại cả hai hướng, trừ xe ưu tiên theo luật định.',
  },
  {
    icon: DEFAULT_IMAGE,
    code: 'P.103',
    name: 'Đường cấm',
    content:
      'Biển báo đường cấm tất cả các loại phương tiện tham gia giao thông đi lại cả hai hướng, trừ xe ưu tiên theo luật định.',
  },
  {
    icon: DEFAULT_IMAGE,
    code: 'P.104',
    name: 'Đường cấm',
    content:
      'Biển báo đường cấm tất cả các loại phương tiện tham gia giao thông đi lại cả hai hướng, trừ xe ưu tiên theo luật định.',
  },
  {
    icon: DEFAULT_IMAGE,
    code: 'P.105',
    name: 'Đường cấm',
    content:
      'Biển báo đường cấm tất cả các loại phương tiện tham gia giao thông đi lại cả hai hướng, trừ xe ưu tiên theo luật định.',
  },
];
const DATA = [
  {
    title: 'Biển cấm 1',
    data: trafficList,
  },
  {
    title: 'Biển cấm 2',
    data: trafficList,
  },
  {
    title: 'Biển cấm 3',
    data: trafficList,
  },
  {
    title: 'Biển cấm 4',
    data: trafficList,
  },
];

const TrafficSigns = () => {
  const navigation = useNavigation();
  const [height, setHeight] = useState(0);
  const [isChangeView, setIsChangeView] = useState(false)

  const onOpenTrafficSign = useCallback(
    (icon, code, name, content) => {
      navigation.navigate('TrafficSignDetail', { icon, code, name, content });
    },
    [navigation],
  );

  return (
    <SafeAreaView
      onLayout={() => {
        if (Platform.OS === 'android') {
          setHeight(StatusBar.currentHeight || 0);
        }
      }}
      style={[styles.savMain, { paddingBottom: height }]}>
      <NavigationBar
        title="Các biển báo"
        titleStyle={styles.titleStyle}
        statusBarStyle={styles.statusBarStyle}
      />
      <View>
        <SectionList
          sections={DATA}
          keyExtractor={item => `${item.code}`}
          stickySectionHeadersEnabled
          onViewableItemsChanged={() => {setIsChangeView(true)}}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.trafficSign}
              onPress={() =>
                onOpenTrafficSign(item.icon, item.code, item.name, item.content)
              }>
              <View style={styles.trafficSignIconBox}>
                <Image
                  source={{ uri: DEFAULT_IMAGE }}
                  style={styles.trafficSignIcon}
                />
              </View>
              <View style={styles.trafficSignContent}>
                <Text style={styles.tsCode}>{item.code}</Text>
                <Text style={styles.tsName}>{item.name}</Text>
                <Text style={styles.tsContent}>{item.content}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={[styles.trafficSignHeaderList, { opacity: isChangeView ? 0.8 : 1}]}>
              <Text style={styles.trafficSignHeaderListText}>{title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TrafficSigns;
