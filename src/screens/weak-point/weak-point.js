import { useState } from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabBarItem,
  TabView
} from 'react-native-tab-view';
import { useRecoilState } from 'recoil';
import { selectedSentenceAtom } from './recoil/selected-sentence';
import TabScreen from './subs/tab-screen';

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
