import React from 'react';
import { View, StyleSheet } from 'react-native';
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

const RepositoryItem = ({ item }) => (
  <View style={repositoryItemStyles.container}>
    <Card item={item} />
  </View>
);

export default RepositoryItem;
