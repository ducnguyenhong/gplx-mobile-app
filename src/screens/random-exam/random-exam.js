import TakeExam from 'components/take-exam';
import { useRecoilValue } from 'recoil';
import { selectedLicenseAtom } from 'state-management/selected-license';
import { questionListTakeExam } from '../../data-test';

const RandomExam = () => {
  const selectedLisence = useRecoilValue(selectedLicenseAtom);
  return (
    <TakeExam
      examKey="RANDOM"
      title={`Đề thi ngẫu nhiên Bằng ${selectedLisence}`}
      questionList={questionListTakeExam}
    />
  );
};

export default RandomExam;
