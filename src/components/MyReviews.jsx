import React from 'react';
import { FlatList } from 'react-native';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';

import ItemSeparator from './ItemSeparator';
import ReviewItem from './ReviewItem';

import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { DELETE_REVIEW } from '../graphql/mutations';

const MyReviews = () => {
  const { data, loading, error, refetch } = useQuery(GET_AUTHORIZED_USER, {
    variables: { includeReviews: true },
  });

  const [deleteReview] = useMutation(DELETE_REVIEW);

  let history = useHistory();

  if (loading || error) return null;

  const reviews = data.authorizedUser.reviews
    ? data.authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  const handleViewRepositroy = (id) => {
    history.push(`/${id}`);
  };

  const handleDeleteReview = async (id) => {
    await deleteReview({ variables: { id } });
    refetch();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          includeButtons={true}
          onViewRepository={handleViewRepositroy}
          onDeleteReview={handleDeleteReview}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
