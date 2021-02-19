import React, { useState } from 'react';
import { FlatList } from 'react-native';

import useRepositories from '../hooks/useRepositories';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import SelectOrdering from './SelectOrdering';

export const RepositoryListContainer = ({
  repositories,
  onSelect,
  selection,
}) => {
  const repositoriyNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={() => (
        <SelectOrdering handleSelect={onSelect} selection={selection} />
      )}
      data={repositoriyNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories, refetch } = useRepositories({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  });

  const [selection, setSelection] = useState(null);

  const onSelect = (value) => {
    setSelection(value);
    refetch(value);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onSelect={onSelect}
      selection={selection}
    />
  );
};

export default RepositoryList;
