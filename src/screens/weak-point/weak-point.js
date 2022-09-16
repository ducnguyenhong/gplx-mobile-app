import TakeExam from 'components/take-exam';
import { questionListStudy } from '../../data-test';

const WeakPoint = () => {
  return (
    <TakeExam
      readOnly
      title="60 câu hỏi điểm liệt"
      questionList={questionListStudy}
    />
  );
};

export default WeakPoint;
