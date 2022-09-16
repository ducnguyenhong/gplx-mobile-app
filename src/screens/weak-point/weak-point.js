import { useState } from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabBarItem,
  TabView
} from 'react-native-tab-view';
import TabScreen from './subs/tab-screen';

const renderScene = SceneMap({
  17: () => <TabScreen />,
  18: () => <TabScreen />,
  19: () => <TabScreen />,
  20: () => <TabScreen />,
  21: () => <TabScreen />,
  22: () => <TabScreen />,
  23: () => <TabScreen />,
  24: () => <TabScreen />,
});

// 60 Câu hỏi điểm liệt
const WeakPoint = () => {
  const layout = useWindowDimensions();

  const [activeTab, setActiveTab] = useState(0);
  const [routes] = useState([
    { key: 17, title: 'CÂU 17' },
    { key: 18, title: 'CÂU 18' },
    { key: 19, title: 'CÂU 17' },
    { key: 20, title: 'CÂU 18' },
    { key: 21, title: 'CÂU 17' },
    { key: 22, title: 'CÂU 18' },
    { key: 23, title: 'CÂU 17' },
    { key: 24, title: 'CÂU 18' },
  ]);

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
