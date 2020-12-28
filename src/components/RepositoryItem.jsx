import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

const repositoryItemStyles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

const RepositoryItem = ({ item }) => (
  <View style={repositoryItemStyles.container}>
    <Card item={item} />
  </View>
);

export default RepositoryItem;
