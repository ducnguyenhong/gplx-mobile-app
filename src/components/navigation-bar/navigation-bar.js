import { useNavigation } from '@react-navigation/native';
// import IconBack from 'assets/images/icon-back-screen.png';
import Text from 'components/text';
import { memo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './navigation-bar.style';

const NavigationBar = props => {
  const {
    title = '',
    NavigationCenter,
    NavigationLeft,
    NavigationRight,
    onPressGoBack,
    showBack = true,
  } = props;

  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    if (onPressGoBack) {
      onPressGoBack();
      return;
    }
    navigation.goBack();
  }, [navigation, onPressGoBack]);

  return (
    <View style={styles.vMain}>
      <View style={styles.vWrapperLeftCenter}>
        <View style={styles.vLeft}>
          {NavigationLeft ||
            (showBack && (
              <TouchableOpacity
                style={styles.toBack}
                activeOpacity={0.8}
                onPress={onGoBack}>
                <FontAwesome5 name="arrow-left" color="#FFF" size={18} />
              </TouchableOpacity>
            ))}
        </View>

        <View style={styles.vCenter}>
          {NavigationCenter || (
            <Text numberOfLines={1} style={styles.tTitle}>
              {title}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.vRight}>
        {!!NavigationRight && <View>{NavigationRight}</View>}
      </View>
    </View>
  );
};

export default memo(NavigationBar);
