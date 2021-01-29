import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import theme from '../theme';
import Card from './Card';

const repositoryItemStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
    borderBottomWidth: 5,
    borderBottomColor: theme.colors.lines,
  },
});

const RepositoryItem = ({ item }) => {
  let history = useHistory();

  return (
    <View style={repositoryItemStyles.container}>
      <TouchableOpacity onPress={() => history.push(`/${item.id}`)}>
        <Card item={item} />
      </TouchableOpacity>
    </View>
  );
};

export default RepositoryItem;
