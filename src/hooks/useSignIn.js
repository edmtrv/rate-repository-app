import { useMutation } from '@apollo/react-hooks';
import { AUTH_USER } from '../graphql/mutations';

const useSignIn = () => {
  const [authorize, result] = useMutation(AUTH_USER);

  const signIn = async ({ username, password }) => {
    return await authorize({
      variables: { credentials: { username, password } },
    });
  };

  return [signIn, result];
};

export default useSignIn;
