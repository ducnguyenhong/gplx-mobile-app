import { useNavigation } from '@react-navigation/native';
// import IconBack from 'assets/images/icon-back-screen.png';
import Text from 'components/text';
import { memo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './navigation-bar.style';

const NavigationBar = props => {
  const {
    title = '',
    NavigationCenter,
    NavigationLeft,
    NavigationRight,
    onPressGoBack,
  } = props;

  const navigation = useNavigation()

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
          {NavigationLeft || (
            <TouchableOpacity
              style={styles.toBack}
              activeOpacity={0.8}
              onPress={onGoBack}>
              {/* <Image source={IconBack} style={styles.imgIconBack} /> */}
              <Text>Back</Text>
            </TouchableOpacity>
          )}
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
