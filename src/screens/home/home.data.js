import FaIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Octicon from 'react-native-vector-icons/Octicons';

export const HOME_MENU = [
  {
    title: 'Đề ngẫu nhiên',
    icon: <Ionicon name="infinite" size={38} color="#FFF" />,
    bgColor: '#FFA101',
    route: 'RandomExam',
  },
  {
    title: 'Thi theo bộ đề',
    icon: <MaterialIcon name="collections-bookmark" size={32} color="#FFF" />,
    bgColor: '#FF3234',
    route: 'ExamByTopic',
  },
  {
    title: 'Xem câu bị sai',
    icon: <MCIcon name="account-check" size={36} color="#FFF" />,
    bgColor: '#8CC24A',
    route: 'SeeWrongQuestion',
  },
  {
    title: 'Ôn tập câu hỏi',
    icon: <MaterialIcon name="menu-book" size={33} color="#FFF" />,
    bgColor: '#35BABF',
    route: 'ReviewQuestion',
  },
  {
    title: 'Các biển báo',
    icon: <FaIcon name="traffic-light" size={30} color="#FFF" />,
    bgColor: '#338AD7',
    route: 'TrafficSigns',
  },
  {
    title: 'Mẹo ghi nhớ',
    icon: <FaIcon name="tag" size={30} color="#FFF" />,
    bgColor: '#CC73E1',
    route: 'MemorizationTips',
  },
  {
    title: '60 câu điểm liệt',
    icon: <Octicon name="shield-check" size={32} color="#FFF" />,
    bgColor: '#795549',
    route: 'WeakPoint',
  },
  {
    title: 'Top 50 câu sai',
    icon: <FaIcon name="graduation-cap" size={31} color="#FFF" />,
    bgColor: '#607D8D',
    route: 'WrongQuestion',
  },
];
