import React, { useState } from 'react'
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import AddIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
//import constants
import colors from '../../Helper/Colors';
import { Width } from '../../Helper/Dimensions';



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
        <View style={styles.container}>
            <View style={styles.view}>
              <SearchBar
               placeholder="Type Here..."
               onChangeText={updateSearch}
                value={search}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}    
          />
          <TouchableOpacity onPress={gotoAddCase}>
            <AddIcon name="add" size={30} color="#808080" />
          </TouchableOpacity>
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10
  },
  containerStyle: {
    borderTopColor: colors.bg,
    borderBottomColor: colors.bg,
    backgroundColor: colors.bg
  },
  inputContainerStyle: {
    borderRadius: 10,
    backgroundColor: colors.white,
    width: Width / 1.2
  }
    
})