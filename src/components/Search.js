import React from 'react';
import { Searchbar } from 'react-native-paper';


export default function Search() {
    const [Search, setSearch] = React.useState('');
    const onChangeSearch = query => setSearch(query);
 return (
    <Searchbar 
    placeholder='Digite o campeão aqui'
    onChangeText={onChangeSearch}
    value={Search}
    style={{marginBottom: 10,}}
    />
    
  );
}