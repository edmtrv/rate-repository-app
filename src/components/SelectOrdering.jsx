import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const items = [
  {
    label: 'Latest repositories',
    value: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  },
  {
    label: 'Highest rated repositories',
    value: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  },
  {
    label: 'Lowest rated repositories',
    value: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  },
];

const SelectOrdering = ({ handleSelect, selection }) => {
  return (
    <RNPickerSelect
      placeholder={{}}
      value={selection}
      onValueChange={handleSelect}
      items={items}
    />
  );
};

export default SelectOrdering;
