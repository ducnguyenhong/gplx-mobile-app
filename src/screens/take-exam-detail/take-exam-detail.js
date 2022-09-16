import TakeExam from 'components/take-exam';
import { questionListTakeExam } from '../../data-test';

const TakeExamDetail = () => {
  return (
    <TakeExam
      title="60 câu hỏi điểm liệt"
      questionList={questionListTakeExam}
    />
  );
};

export default TakeExamDetail;
