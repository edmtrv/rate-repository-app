import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const [repository, setRepository] = useState(null);
  const { loading, data, refetch } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data) {
      setRepository(data.repository);
    }
  }, [data]);

  return { repository, loading, refetch };
};

export default useRepository;
