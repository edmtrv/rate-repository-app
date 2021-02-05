import { useMutation } from '@apollo/react-hooks';

import { CREATE_REVIEW } from '../graphql/mutations';

const useReview = () => {
  const [createReview, result] = useMutation(CREATE_REVIEW);

  const repositoryReview = async ({
    ownerName,
    repositoryName,
    rating,
    text,
  }) => {
    const { data } = await createReview({
      variables: {
        review: { repositoryName, ownerName, rating, text },
      },
    });

    return { data };
  };

  return [repositoryReview, result];
};

export default useReview;
