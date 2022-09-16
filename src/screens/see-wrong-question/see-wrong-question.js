import TakeExam from 'components/take-exam';
import { questionListStudy } from '../../data-test';

const SeeWrongQuestion = () => {
  return (
    <TakeExam
      examKey="SEE_WRONG"
      readOnly
      title="Câu hỏi sai nhiều"
      questionList={questionListStudy}
    />
  );
};

export default SeeWrongQuestion;
