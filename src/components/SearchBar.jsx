import React from 'react';
import { View } from 'react-native';

import TextInput from './TextInput';

const SearchBar = ({ handleChangeText, text }) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={handleChangeText}
        value={text}
      />
    </View>
  );
};

export default SearchBar;
