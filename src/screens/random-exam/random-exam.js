import NavigationBar from 'components/navigation-bar';
import { SafeAreaView } from 'react-native';
import { useRecoilValue } from 'recoil';
import { selectedLicenseAtom } from 'state-management/selected-license';

const RandomExam = () => {
  const selectedLisence = useRecoilValue(selectedLicenseAtom);
  return (
    <SafeAreaView>
      <NavigationBar title={`Đề thi ngẫu nhiên Bằng ${selectedLisence}`} />
    </SafeAreaView>
  );
};

export default RandomExam;
