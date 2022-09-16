import NavigationBar from 'components/navigation-bar';
import QuestionMap from 'components/question-map/question-map';
import { useCallback, useState } from 'react';
import { SafeAreaView, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabBarItem,
  TabView
} from 'react-native-tab-view';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState } from 'recoil';
import { selectedSentenceAtom } from './recoil/selected-sentence';
import TabScreen from './subs/tab-screen';
import { styles } from './weak-point.style';

const questionList = [
  { key: 17, title: 'CÂU 17' },
  { key: 18, title: 'CÂU 18' },
  { key: 19, title: 'CÂU 19' },
  { key: 20, title: 'CÂU 20' },
  { key: 21, title: 'CÂU 21' },
  { key: 22, title: 'CÂU 22' },
  { key: 23, title: 'CÂU 23' },
  { key: 24, title: 'CÂU 24' },
];

const renderScene = SceneMap({
  17: () => <TabScreen questionList={questionList} />,
  18: () => <TabScreen questionList={questionList} />,
  19: () => <TabScreen questionList={questionList} />,
  20: () => <TabScreen questionList={questionList} />,
  21: () => <TabScreen questionList={questionList} />,
  22: () => <TabScreen questionList={questionList} />,
  23: () => <TabScreen questionList={questionList} />,
  24: () => <TabScreen questionList={questionList} />,
});

// 60 Câu hỏi điểm liệt
const WeakPoint = () => {
  const layout = useWindowDimensions();
  const [activeTab, setActiveTab] = useRecoilState(selectedSentenceAtom);
  const [routes] = useState(questionList);

  const onReport = useCallback(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationBar
        title="60 câu hỏi điểm liệt"
        NavigationRight={
          <View style={styles.vNavRight}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.toEmoji}
              onPress={onReport}>
              <MCIcon name="emoticon-sad-outline" color="#FFF" size={23} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <Ionicon name="search" color="#FFF" size={23} />
            </TouchableOpacity>
          </View>
        }
      />
      <QuestionMap
        questionList={questionList}
        currentQuestionIndex={activeTab}
      />
      <TabView
        navigationState={{ index: activeTab, routes }}
        renderScene={renderScene}
        onIndexChange={index => setActiveTab(index)}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled
            renderTabBarItem={itemProps => (
              <TabBarItem {...itemProps} style={{ width: 80 }} />
            )}
            tabStyle={{ width: 80 }}
            renderIndicator={props => (
              <TabBarIndicator
                {...props}
                style={{ width: 80, backgroundColor: 'yellow' }}
              />
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default WeakPoint;
