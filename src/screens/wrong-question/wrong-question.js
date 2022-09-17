import TakeExam from 'components/take-exam';
import { questionListTakeExam } from '../../data-test';

const WrongQuestion = () => {
  return (
    <TakeExam
      examKey="WRONG"
      readOnly
      title="50 câu nhiều người sai"
      questionList={questionListTakeExam}
    />
  );
};

export default WrongQuestion;
