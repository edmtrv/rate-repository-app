import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    marginRight: 10,
  },
});

const AppBarTab = ({ to, text, onPressHandler }) => {
  return (
    <Link to={to}>
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <Text
          style={styles.tab}
          color="darkbg"
          fontSize="subheading"
          fontWeight="bold"
        >
          {text}
        </Text>
      </TouchableWithoutFeedback>
    </Link>
  );
};

export default AppBarTab;
