import TakeExam from 'components/take-exam';
import { questionListStudy } from '../../data-test';

const WrongQuestion = () => {
  return (
    <TakeExam
      readOnly
      title="50 câu nhiều người sai"
      questionList={questionListStudy}
    />
  );
};

export default WrongQuestion;
