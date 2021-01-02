import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

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
const onSignIn = (values) => console.log(values);

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.buttonContainer}>
          <Text fontWeight="bold" color="darkbg">
            Sign In
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSignIn}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;