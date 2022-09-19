import { useRoute } from '@react-navigation/native';
import TakeExam from 'components/take-exam';
import { questionListTakeExam } from '../../data-test';

const TakeExamDetail = () => {
  const route = useRoute();
  const { id, defaultData, title, questionList, examKey } = route.params || {};
  return (
    <TakeExam
      defaultData={defaultData}
      examKey={examKey || `EXAM_DETAIL_${id}`}
      title={title || 'Đề kiểm tra'}
      questionList={questionList || questionListTakeExam}
    />
  );
};

export default TakeExamDetail;
