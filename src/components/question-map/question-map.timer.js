import { StackActions, useNavigation } from '@react-navigation/native';
import Text from 'components/text';
import { memo, useEffect, useState } from 'react';
import { styles } from './question-map.style';

const Timer = ({ examKey, title }) => {
  const [minutes, setMinutes] = useState(22);
  const [seconds, setSeconds] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(myInterval);
  });

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      // navigation.navigate('ResultExam', { examKey, title });
      const pushAction = StackActions.push('ResultExam', { examKey, title });
      navigation.dispatch(pushAction);
    }
  }, [examKey, minutes, navigation, seconds, title]);

  return (
    <Text style={styles.tTime}>
      {minutes}:{`${seconds}`.length === 2 ? seconds : `0${seconds}`}
    </Text>
  );
};

export default memo(Timer);
