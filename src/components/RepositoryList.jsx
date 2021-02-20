import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import SelectOrdering from './SelectOrdering';
import SearchBar from './SearchBar';

export class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader = () => {
    const props = this.props;

    return <RepositoryListHeader {...props} />;
  };

  render() {
    const repositoriyNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        ListHeaderComponent={this.renderHeader()}
        data={repositoriyNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const RepositoryListHeader = ({
  onSelect,
  selection,
  handleChangeText,
  text,
}) => {
  return (
    <>
      <SearchBar handleChangeText={handleChangeText} text={text} />
      <SelectOrdering handleSelect={onSelect} selection={selection} />
    </>
  );
};

const RepositoryList = () => {
  const { repositories, refetch } = useRepositories({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  });

  const [selection, setSelection] = useState(null);
  const [text, setText] = useState('');
  const [searchKeyword] = useDebounce(text, 500);

  const handleChangeText = (text) => {
    setText(text);
    refetch({ searchKeyword });
  };

  const onSelect = (value) => {
    setSelection(value);
    refetch(value);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onSelect={onSelect}
      selection={selection}
      handleChangeText={handleChangeText}
      text={text}
    />
  );
};

export default RepositoryList;
