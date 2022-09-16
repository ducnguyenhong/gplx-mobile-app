import TakeExam from 'components/take-exam';
import { questionListStudy } from '../../data-test';

const WeakPoint = () => {
  return (
    <TakeExam
      examKey="WEAK_POINT"
      readOnly
      title="60 câu hỏi điểm liệt"
      questionList={questionListStudy}
    />
  );
};

export default WeakPoint;
