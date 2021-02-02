import React from 'react';
import { View, StyleSheet } from 'react-native';
import format from 'date-fns/format';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 5,
    borderBottomColor: theme.colors.lines,
  },
  rating: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 40 / 2,
    borderColor: theme.colors.primary,
  },
  main: {
    flex: 1,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color="primary" fontWeight="bold">
          {review.rating}
        </Text>
      </View>
      <View style={styles.main}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
