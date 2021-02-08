import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
import { useHistory } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';

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

const initialValues = { username: '', password: '', passwordConfirm: '' };

const signUpSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <FormikTextInput
            name="passwordConfirm"
            placeholder="Password confirmation"
            secureTextEntry
          />
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={styles.buttonContainer}>
              <Text fontWeight="bold" color="darkbg">
                Sign Up
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async ({ username, password }) => {
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
