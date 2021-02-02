import React from 'react';
import { FlatList } from 'react-native';
import useRepositories from '../hooks/useRepositories';

import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';

export const RepositoryListContainer = ({ repositories }) => {
  const repositoriyNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoriyNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
