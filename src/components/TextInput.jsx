import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  field: {
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.lines,
  },
  errorField: {
    borderColor: theme.colors.errors,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.field, error && styles.errorField];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
