import Home from 'screens/home';
import RandomExam from 'screens/random-exam';
import ReviewQuestion from 'screens/review-question';
import SelectLicense from 'screens/select-license';
import TrafficSignDetail from 'screens/traffic-sign-detail';
import TrafficSigns from 'screens/traffic-signs';
import WeakPoint from 'screens/weak-point';
import TakeExamList from '../screens/take-exam-list';

export const HOME_ROUTES = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'SelectLicense',
    component: SelectLicense,
  },
  {
    name: 'RandomExam',
    component: RandomExam,
  },
  {
    name: 'TakeExamList',
    component: TakeExamList,
  },
];

// ví dụ màn Home có ô Các biển báo, thì tất cả các screen nằm trong đấy sẽ khai báo ở đây
export const TRAFFIC_SIGNS_ROUTES = [
  {
    name: 'TrafficSigns',
    component: TrafficSigns,
  },
  {
    name: 'TrafficSignDetail',
    component: TrafficSignDetail,
  },
];

// ví dụ màn Home có ô Ôn tập câu hỏi, thì tất cả các screen nằm trong đấy sẽ khai báo ở đây
export const REVIEW_QUESTION_ROUTES = [
  {
    name: 'ReviewQuestion',
    component: ReviewQuestion,
  },
];

export const WEAKPOINT_ROUTES = [
  {
    name: 'WeakPoint',
    component: WeakPoint,
  },
];
