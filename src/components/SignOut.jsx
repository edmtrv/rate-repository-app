import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { AUTHORIZED_USER } from '../graphql/queries';

const SignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const { client } = useQuery(AUTHORIZED_USER);
  console.log('hit');
  authStorage.removeAccessToken();
  client.resetStore();

  return <Redirect to="/" />;
};

export default SignOut;
