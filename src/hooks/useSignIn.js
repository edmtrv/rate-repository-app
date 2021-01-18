import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { AUTH_USER } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [authorize, result] = useMutation(AUTH_USER);
  const authStorage = useContext(AuthStorageContext);

  const signIn = async ({ username, password }) => {
    const { data } = await authorize({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(data.authorize.accessToken);
    result.client.resetStore();

    return { data };
  };

  return [signIn, result];
};

export default useSignIn;
