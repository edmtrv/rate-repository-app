import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const RepositorySingle = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({ id, first: 5 });

  if (!repository) {
    return null;
  }

  const onEndReach = () => {
    fetchMore();
  };

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <RepositoryItem item={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositorySingle;
