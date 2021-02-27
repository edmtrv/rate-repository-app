import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { loading, data, refetch, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      variables: { ...variables },
      fetchPolicy: 'cache-and-network',
    }
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      query: GET_REPOSITORIES,
      variables: { after: data.repositories.pageInfo.endCursor, ...variables },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    refetch,
    ...result,
  };
};

export default useRepositories;
