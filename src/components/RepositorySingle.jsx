import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const RepositorySingle = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading || !repository) {
    return null;
  }

  return <RepositoryItem item={repository} />;
};

export default RepositorySingle;
