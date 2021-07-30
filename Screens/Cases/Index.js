import React, { useState } from 'react'
import { View,StyleSheet,Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Width } from '../../Helper/Dimensions';
import AddIcon from 'react-native-vector-icons/MaterialIcons'


export default function Index() {

    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
    setSearch(search);
  };

    return (
        <View style={{ flex: 1 }}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',padding:10}}>
              <SearchBar
               placeholder="Type Here..."
               onChangeText={updateSearch}
                value={search}
                containerStyle={{borderTopColor:'#f6f6f6', borderBottomColor:'#f6f6f6',backgroundColor:'#f6f6f6'}}
                inputContainerStyle={{borderRadius:10,backgroundColor:'#ffffff',width:Width/1.2}}    
                />
                <AddIcon name="add" size={30} color="#808080"/>
           </View>
        </View>
    );
}
const styles = StyleSheet.create ({
    
})