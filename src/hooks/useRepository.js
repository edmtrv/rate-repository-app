import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (variables) => {
  const { loading, data, refetch, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      variables: { ...variables },
      fetchPolicy: 'cache-and-network',
    }
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...previousResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };

        console.log('fetching');

        return nextResult;
      },
    });
  };

  return {
    repository: data ? data.repository : undefined,
    loading,
    fetchMore: handleFetchMore,
    refetch,
    ...result,
  };
};

export default useRepository;
