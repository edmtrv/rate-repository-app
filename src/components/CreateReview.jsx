import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useReview from '../hooks/useReview';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    padding: 24,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const reviewSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().min(0).max(100).required('Rating is required'),
  text: yup.string(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={reviewSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
            keyboardType="numeric"
          />
          <FormikTextInput name="text" placeholder="Review" multiline />
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={styles.buttonContainer}>
              <Text fontWeight="bold" color="darkbg">
                Create a review
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
  );
};

const CreateReview = () => {
  const [repositoryReview] = useReview();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { data } = await repositoryReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });
      const { id } = data.createReview.repository;
      history.push(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
