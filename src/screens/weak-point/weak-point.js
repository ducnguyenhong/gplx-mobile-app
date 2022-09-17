import TakeExam from 'components/take-exam';
import { questionListTakeExam } from '../../data-test';

const WeakPoint = () => {
  return (
    <TakeExam
      examKey="WEAK_POINT"
      readOnly
      title="60 câu hỏi điểm liệt"
      questionList={questionListTakeExam}
    />
  );
};

export default WeakPoint;
