import { useNavigation } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import QuestionMap from 'components/question-map/question-map';
import TextInput from 'components/text-input';
import isEmpty from 'lodash/isEmpty';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
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
  const [activeFuncSearch, setActiveFuncSearch] = useState(false);
  const navigation = useNavigation();

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
        onPressGoBack={() => {
          if (activeFuncSearch) {
            setActiveFuncSearch(false);
            return;
          }
          navigation.goBack();
        }}
        title={title}
        NavigationRight={
          <View style={styles.vNavRight}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => modalReportRef.current?.showModal()}>
              <MCIcon name="emoticon-sad-outline" color="#FFF" size={23} />
            </TouchableOpacity>

            {readOnly && !activeFuncSearch && (
              <TouchableOpacity
                style={styles.toSearch}
                activeOpacity={0.8}
                onPress={() => setActiveFuncSearch(true)}>
                <Ionicon name="search" color="#FFF" size={23} />
              </TouchableOpacity>
            )}

            {!readOnly && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={styles.toSearch}>
                <Ionicon name="checkmark-done" color="#FFF" size={25} />
              </TouchableOpacity>
            )}

            <ModalReport ref={modalReportRef} />
          </View>
        }
        NavigationCenter={
          activeFuncSearch ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicon name="search" color="#FFF" size={23} />
              <TextInput
                autoFocus
                placeholderTextColor="#FFF"
                placeholder="Tìm kiếm câu hỏi"
                style={{ color: '#FFF', marginLeft: 10, fontSize: 18 }}
              />
            </View>
          ) : undefined
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
