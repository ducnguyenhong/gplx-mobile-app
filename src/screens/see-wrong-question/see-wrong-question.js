import TakeExam from 'components/take-exam';
import { questionListTakeExam } from '../../data-test';

const SeeWrongQuestion = () => {
  return (
    <TakeExam
      examKey="SEE_WRONG"
      readOnly
      title="Câu hỏi sai nhiều"
      questionList={questionListTakeExam}
    />
  );
};

export default SeeWrongQuestion;
