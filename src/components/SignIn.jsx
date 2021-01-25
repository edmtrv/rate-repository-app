import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
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

const initialValues = { username: '', password: '' };

const signInSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const SignInForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            testID="usernameField"
            name="username"
            placeholder="Username"
          />
          <FormikTextInput
            testID="passwordField"
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <TouchableWithoutFeedback
            testID="submitButton"
            onPress={handleSubmit}
          >
            <View style={styles.buttonContainer}>
              <Text fontWeight="bold" color="darkbg">
                Sign In
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
