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
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.field];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
