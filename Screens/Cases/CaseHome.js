import React, { useState } from 'react'
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Width } from '../../Helper/Dimensions';
import AddIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';


export default function Index() {

    const [search, setSearch] = useState('');

    const navigation = useNavigation();  


    const updateSearch = (search) => {
    setSearch(search);
  };

   gotoAddCase = () => {
        navigation.navigate('AddCase')
    }

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
          <TouchableOpacity onPress={gotoAddCase}>
            <AddIcon name="add" size={30} color="#808080" />
          </TouchableOpacity>
           </View>
        </View>
    );
}
const styles = StyleSheet.create ({
    
})