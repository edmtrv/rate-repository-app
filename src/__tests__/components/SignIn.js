import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { SignInForm } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls the form handler function with correct arguments', async () => {
      const onSubmit = jest.fn();

      const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
});
