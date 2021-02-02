import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const RepositorySingle = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading || !repository) {
    return null;
  }

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositorySingle;
