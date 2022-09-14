import { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  tBase: {
    // fontFamily: 'Averta-Regular',
    fontSize: 14,
    color: '#292D32',
  },
});

const TextComponent = props => {
  const { children, style, ...rest } = props;

  let primaryStyle = style;
  if (Array.isArray(style) && !!style.length) {
    primaryStyle = style.reduce((prev, curr) => ({ ...prev, ...curr }));
  }

  return (
    <Text
      style={primaryStyle ? [styles.tBase, { ...primaryStyle }] : styles.tBase}
      {...rest}>
      {children}
    </Text>
  );
};

export default memo(TextComponent);
