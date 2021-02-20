import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection, searchText }) => {
  const [repositories, setRepositories] = useState(null);
  const { loading, data, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchText },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch };
};

export default useRepositories;
