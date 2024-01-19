import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { View } from 'react-native';
import TextInput from '../TextInput';
import theme from '../../theme';

const RepositorySortMenu = ({
  setOrderBy,
  setOrderDirection,
  setSearchKeyword,
}) => {
  const [order, setOrder] = useState('Latest repositories');

  return (
    <View>
      <View style={theme.whiteCnt}>
        <TextInput
          onChangeText={value => setSearchKeyword(value)}
          placeholder='Search repositories...'
        />
      </View>
      <Picker
      selectedValue={order}
      onValueChange={(itemValue) => {
        if (itemValue === 'latest') {
          setOrderBy('CREATED_AT');
          setOrderDirection('DESC');
          setOrder(itemValue);
        } else if (itemValue === 'highest') {
          setOrderBy('RATING_AVERAGE');
          setOrderDirection('DESC');
          setOrder(itemValue);
        } else if (itemValue === 'lowest') {
          setOrderBy('RATING_AVERAGE');
          setOrderDirection('ASC');
          setOrder(itemValue);
        }
      }
      }>
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
    </View>
  );
};

export default RepositorySortMenu;
