import { useRoute } from '@react-navigation/native';
import TakeExam from 'components/take-exam';
import { questionListTakeExam } from '../../data-test';

const TakeExamDetail = () => {
  const route = useRoute();
  const { id } = route.params || {};
  return (
    <TakeExam
      examKey={`EXAM_DETAIL_${id}`}
      title="Đề kiểm tra"
      questionList={questionListTakeExam}
    />
  );
};

export default TakeExamDetail;
