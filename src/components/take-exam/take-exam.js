import {
  StackActions,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import QuestionMap from 'components/question-map/question-map';
import TextInput from 'components/text-input';
import isEmpty from 'lodash/isEmpty';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { indexSentenceAtom } from './recoil/index-sentence';
import { statusSentenceAtom } from './recoil/status-sentence';
import ModalReport from './subs/modal-report';
import QuestionDrawer from './subs/question-drawer';
import TabScreen from './subs/tab-screen';
import { styles } from './take-exam.style';

const getScenes = (readOnly, questionList, examKey, noMap, defaultData) => {
  let scenes = {};
  questionList.forEach(item => {
    scenes[item.id] = () => (
      <TabScreen
        questionList={questionList}
        readOnly={readOnly}
        examKey={examKey}
        noMap={noMap}
        defaultData={defaultData}
      />
    );
  });
  return SceneMap(scenes);
};

const TakeExam = props => {
  const { questionList, title, readOnly, examKey, noMap, defaultData } = props;
  const { width } = useWindowDimensions();
  const route = useRoute();
  const [tabIndex, setTabIndex] = useRecoilState(indexSentenceAtom);
  const resetTabIndex = useResetRecoilState(indexSentenceAtom);
  const [statusSentences, setStatusSentences] = useRecoilState(
    statusSentenceAtom(examKey),
  );
  const modalReportRef = useRef();
  const [activeFuncSearch, setActiveFuncSearch] = useState(false);
  const navigation = useNavigation();
  const drawerRef = useRef();

  const routes = useMemo(
    () =>
      questionList.map(item => ({
        key: item.id,
        title: item.title,
      })),
    [questionList],
  );

  const renderScene = useMemo(
    () => getScenes(readOnly, questionList, examKey, noMap, defaultData),
    [questionList, readOnly, examKey, noMap, defaultData],
  );

  const onSubmitExam = useCallback(() => {
    Alert.alert('Kết thúc bài thi', 'Bài thi sẽ được kết thúc và chấm điểm', [
      {
        text: 'TIẾP TỤC',
        style: 'cancel',
      },
      {
        text: 'KẾT THÚC',
        onPress: () => {
          // navigation.navigate('ResultExam', { examKey, title })
          const pushAction = StackActions.push('ResultExam', {
            examKey,
            title,
          });
          navigation.dispatch(pushAction);
        },
      },
    ]);
  }, [examKey, navigation, title]);

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      if (!defaultData) {
        e.preventDefault();
        !noMap && !readOnly && onSubmitExam();
      }
    });
    // return () => navigation.removeListener('beforeRemove');
  }, [navigation, noMap, onSubmitExam, readOnly, defaultData, route.name]);

  useEffect(() => {
    if (isEmpty(statusSentences)) {
      setStatusSentences(
        questionList.map(item => ({
          id: item.id,
          status: undefined,
        })),
      );
    }
  }, [questionList, setStatusSentences, statusSentences]);

  useEffect(() => {
    if (defaultData) {
      setTabIndex(defaultData.id);
    }
  }, [defaultData, setTabIndex]);

  useEffect(() => {
    return () => {
      resetTabIndex();
      // resetStatusSentences();
    };
  }, [resetTabIndex]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer
        ref={drawerRef}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.25} // 25% gap on the right side of drawer
        panCloseMask={0.25}
        closedDrawerOffset={-3}
        styles={{
          main: { paddingLeft: 3, backgroundColor: '#000' },
        }}
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 },
        })}
        content={<QuestionDrawer onClose={() => drawerRef.current?.close()} />}>
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
              {(readOnly || noMap) && !activeFuncSearch && (
                <TouchableOpacity
                  style={styles.toSearch}
                  activeOpacity={0.8}
                  onPress={() => setActiveFuncSearch(true)}>
                  <Ionicon name="search" color="#FFF" size={23} />
                </TouchableOpacity>
              )}

              {!readOnly && !noMap && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={onSubmitExam}
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
          NavigationLeft={
            readOnly || noMap ? undefined : (
              <TouchableOpacity
                onPress={() => drawerRef.current?.open()}
                activeOpacity={0.8}
                style={{ paddingHorizontal: 13 }}>
                <MCIcon name="format-list-bulleted" color="#FFF" size={26} />
              </TouchableOpacity>
            )
          }
        />
        {!readOnly && !noMap && (
          <QuestionMap
            title={title}
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
      </Drawer>
    </SafeAreaView>
  );
};

export default memo(TakeExam);
