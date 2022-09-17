import NavigationBar from 'components/navigation-bar';
import QuestionMap from 'components/question-map/question-map';
import isEmpty from 'lodash/isEmpty';
import { memo, useEffect, useMemo, useRef } from 'react';
import {
  SafeAreaView, TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { indexSentenceAtom } from './recoil/index-sentence';
import { statusSentenceAtom } from './recoil/status-sentence';
import ModalReport from './subs/modal-report';
import TabScreen from './subs/tab-screen';
import { styles } from './take-exam.style';

const getScenes = (readOnly, questionList, examKey) => {
  let scenes = {};
  questionList.forEach(item => {
    scenes[item.id] = () => (
      <TabScreen
        questionList={questionList}
        readOnly={readOnly}
        examKey={examKey}
      />
    );
  });
  return SceneMap(scenes);
};

const TakeExam = props => {
  const { questionList, title, readOnly, examKey } = props;
  const { width } = useWindowDimensions();
  const [tabIndex, setTabIndex] = useRecoilState(indexSentenceAtom);
  const resetTabIndex = useResetRecoilState(indexSentenceAtom);
  const resetStatusSentences = useResetRecoilState(statusSentenceAtom(examKey));
  const setStatusSentences = useSetRecoilState(statusSentenceAtom(examKey));
  const modalReportRef = useRef();

  const routes = useMemo(
    () =>
      questionList.map(item => ({
        key: item.id,
        title: item.title,
      })),
    [questionList],
  );

  const renderScene = useMemo(
    () => getScenes(readOnly, questionList, examKey),
    [questionList, readOnly, examKey],
  );

  useEffect(() => {
    if (isEmpty(statusSentenceAtom)) {
      setStatusSentences(() =>
        questionList.map(item => ({
          id: item.id,
          status: undefined,
        })),
      );
    }
  }, [questionList, setStatusSentences]);

  useEffect(() => {
    return () => {
      resetTabIndex();
      resetStatusSentences();
    };
  }, [resetStatusSentences, resetTabIndex]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationBar
        title={title}
        NavigationRight={
          <View style={styles.vNavRight}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.toEmoji}
              onPress={() => modalReportRef.current?.showModal()}>
              <MCIcon name="emoticon-sad-outline" color="#FFF" size={23} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <Ionicon
                name={readOnly ? 'search' : 'checkmark-done'}
                color="#FFF"
                size={readOnly ? 23 : 25}
              />
            </TouchableOpacity>

            <ModalReport ref={modalReportRef} />
          </View>
        }
      />
      {!readOnly && (
        <QuestionMap
          examKey={examKey}
          questionList={questionList}
          currentQuestionIndex={tabIndex}
        />
      )}
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
