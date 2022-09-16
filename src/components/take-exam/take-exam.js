import NavigationBar from 'components/navigation-bar';
import QuestionMap from 'components/question-map/question-map';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { SafeAreaView, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { indexSentenceAtom } from './recoil/index-sentence';
import TabScreen from './subs/tab-screen';
import { styles } from './take-exam.style';

const getScenes = (readOnly, questionList) => {
  let scenes = {};
  questionList.forEach(item => {
    scenes[item.id] = () => (
      <TabScreen questionList={questionList} readOnly={readOnly} />
    );
  });
  return SceneMap(scenes);
};

const TakeExam = props => {
  const { questionList, title, readOnly } = props;
  const { width } = useWindowDimensions();
  const [tabIndex, setTabIndex] = useRecoilState(indexSentenceAtom);
  const resetTabIndex = useResetRecoilState(indexSentenceAtom);

  const routes = useMemo(
    () =>
      questionList.map(item => ({
        key: item.id,
        title: item.title,
      })),
    [questionList],
  );

  const renderScene = useMemo(
    () => getScenes(readOnly, questionList),
    [questionList, readOnly],
  );

  const onReport = useCallback(() => {}, []);

  useEffect(() => {
    return () => resetTabIndex();
  }, [resetTabIndex]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationBar
        title={title}
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
        currentQuestionIndex={tabIndex}
      />
      <TabView
        navigationState={{ index: tabIndex, routes }}
        renderScene={renderScene}
        onIndexChange={index => setTabIndex(index)}
        initialLayout={{ width }}
        renderTabBar={tabBarProps => (
          <TabBar {...tabBarProps} scrollEnabled tabStyle={{ width: 80 }} />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(TakeExam);
