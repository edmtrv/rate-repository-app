import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const AppBarTab = ({ text, onPressHandler }) => {
  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <Text color="darkbg" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
