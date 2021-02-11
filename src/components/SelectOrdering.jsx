import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const orderingCriterias = [
  {
    label: 'Latest repositories',
    value: { orderBy: 'CREATED_AT', orderDirection: null },
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

const SelectOrdering = () => {
  const [selection, setSelection] = useState();
  return (
    <RNPickerSelect
      value={selection}
      onValueChange={(value) => setSelection(value)}
      items={orderingCriterias}
    />
  );
};

export default SelectOrdering;
