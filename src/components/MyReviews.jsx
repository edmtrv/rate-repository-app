import React from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import ItemSeparator from './ItemSeparator';
import ReviewItem from './ReviewItem';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const MyReviews = () => {
  const { data, loading, error } = useQuery(GET_AUTHORIZED_USER, {
    variables: { includeReviews: true },
  });

  if (loading || error) return null;

  const reviews = data.authorizedUser.reviews
    ? data.authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
