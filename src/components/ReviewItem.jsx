import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from 'react-native';
import format from 'date-fns/format';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    borderBottomColor: theme.colors.lines,
    padding: 12,
  },
  review: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 15,
    marginLeft: 10,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 37,
    paddingRight: 37,
    borderRadius: 5,
    alignItems: 'stretch',
    backgroundColor: theme.colors.primary,
  },
  redButton: {
    backgroundColor: theme.colors.errors,
  },
});

const ReviewItem = ({
  review,
  includeButtons,
  onViewRepository,
  onDeleteReview,
}) => (
  <View style={styles.container}>
    <View style={styles.review}>
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
    {includeButtons && (
      <ActionButtons
        onViewRepository={onViewRepository}
        onDeleteReview={onDeleteReview}
        id={review.id}
        repositoryId={review.repositoryId}
      />
    )}
  </View>
);

const ActionButtons = ({
  repositoryId,
  id,
  onViewRepository,
  onDeleteReview,
}) => {
  const openAlert = () =>
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel', onPress: () => null },
        { text: 'Delete', onPress: () => onDeleteReview(id) },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.buttonContainer}>
      <TouchableWithoutFeedback onPress={() => onViewRepository(repositoryId)}>
        <View style={styles.button}>
          <Text fontWeight="bold" color="darkbg">
            View repository
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={openAlert}>
        <View style={[styles.button, styles.redButton]}>
          <Text fontWeight="bold" color="darkbg">
            Delete repository
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ReviewItem;
