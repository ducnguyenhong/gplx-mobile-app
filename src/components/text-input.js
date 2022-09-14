import { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  tiBase: {
    // fontFamily: 'Averta-Regular',
    fontSize: 14,
    color: '#292D32',
  },
});

const TextInputComponent = forwardRef((props, ref) => {
  const { placeholderTextColor, children, style, ...rest } = props;
  const inputRef = useRef();

  let primaryStyle = style;
  if (Array.isArray(style) && !!style.length) {
    primaryStyle = style.reduce((prev, curr) => ({ ...prev, ...curr }));
  }

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  return (
    <TextInput
      style={
        primaryStyle ? [styles.tiBase, { ...primaryStyle }] : styles.tiBase
      }
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : '#828282'
      }
      ref={inputRef}
      {...rest}
    />
  );
});

export default TextInputComponent;
