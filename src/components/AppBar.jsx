import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/react-hooks';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 12,
    paddingBottom: 20,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  const { data, loading, error } = useQuery(GET_AUTHORIZED_USER);

  if (loading || error) return null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/" text="Repositories" />
        {data.authorizedUser ? (
          <>
            <AppBarTab to="/createreview" text="Create a review" />
            <AppBarTab to="/myreviews" text="My reviews" />
            <AppBarTab to="/signout" text="Sign out" />
          </>
        ) : (
          <>
            <AppBarTab to="/signin" text="Sign in" />
            <AppBarTab to="/signup" text="Sign up" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
