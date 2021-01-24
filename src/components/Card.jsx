import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const parseCount = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }

  return count;
};

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
});
const Header = ({ avatarUrl, name, description }) => (
  <View style={headerStyles.container}>
    <View style={headerStyles.avatarContainer}>
      <Image style={headerStyles.avatar} source={{ uri: avatarUrl }} />
    </View>
    <View style={headerStyles.infoContainer}>
      <Text testID="name" fontWeight="bold">
        {name}
      </Text>
      <Text testID="description" color="textSecondary">
        {description}
      </Text>
    </View>
  </View>
);

const languageStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingLeft: 65,
  },
  tag: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
});

const Language = ({ language }) => (
  <View style={languageStyles.container}>
    <Text testID="language" color="darkbg" style={languageStyles.tag}>
      {language}
    </Text>
  </View>
);

const statsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  pair: {
    alignItems: 'center',
  },
});

const Stats = ({ stars, forks, reviews, rating }) => (
  <View style={statsStyles.container}>
    <View style={statsStyles.pair}>
      <Text testID="stars" fontWeight="bold">
        {parseCount(stars)}
      </Text>
      <Text>Stars</Text>
    </View>
    <View style={statsStyles.pair}>
      <Text testID="forks" fontWeight="bold">
        {parseCount(forks)}
      </Text>
      <Text>Forks</Text>
    </View>
    <View style={statsStyles.pair}>
      <Text testID="reviews" fontWeight="bold">
        {reviews}
      </Text>
      <Text>Reviews</Text>
    </View>
    <View style={statsStyles.pair}>
      <Text testID="rating" fontWeight="bold">
        {rating}
      </Text>
      <Text>Rating</Text>
    </View>
  </View>
);

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
});

const Card = ({ item }) => (
  <View style={cardStyles.container}>
    <Header
      avatarUrl={item.ownerAvatarUrl}
      name={item.fullName}
      description={item.description}
    />
    <Language language={item.language} />
    <Stats
      stars={item.stargazersCount}
      forks={item.forksCount}
      reviews={item.reviewCount}
      rating={item.ratingAverage}
    />
  </View>
);

export default Card;
