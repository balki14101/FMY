import React, { useState } from 'react'
import { View,StyleSheet,Text, TouchableOpacity,Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import AddIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

//import constants
import colors from '../../Helper/Colors';
import { Height, Width } from '../../Helper/Dimensions';

export default function Index() {
  const [search, setSearch] = useState('');
//Table
  const tableHead = ['#', 'Client', 'Case #', 'Type', 'Next Date'];
  const tableData = [
    ['1', 'Name1', '1/3', 'Property','5-1-2001'],
    ['2', 'Name2', '1/1', 'Crime','5-1-2001'],
    ['3', 'Name3', '2/3', 'Property','5-1-2001'],
    ['4', 'Name4', '2/2', 'Property','5-1-2001']
  ];
  //Navigation
    const navigation = useNavigation();  

  //Updating Search box
    const updateSearch = (search) => {
    setSearch(search);
  };

  //Navigating to Add case Screen
  const gotoAddCase = () => {
    navigation.navigate('AddCase')
  };

  //Navigating to Case details screen
  const gotoCaseDetails= () => navigation.navigate('Case Details')

    _alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
  }
  //button for add details screen
   const element = (data, index) => (
      <TouchableOpacity onPress={gotoCaseDetails}>
        <View style={styles.btn}>
         <Text style={styles.btnText}>{ data}</Text>
        </View>
      </TouchableOpacity>
    );

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
            <View style={{backgroundColor:'#1E94A3',borderRadius:50}}>
              <AddIcon name="add" size={30} color="#f6f6f6" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:10}}>
          <Table  borderStyle={{borderColor: 'transparent'}}>
          <Row flexArr={[1,2,2,2,2]} data={tableHead} style={styles.head} textStyle={styles.headertext}/>
          {
            tableData.map((rowData, index) => (
              <TableWrapper key={index}  style={styles.row}>
                { 
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData  }  textStyle={styles.celltext}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        


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
  },
  head: {
    height: Height/15,
    backgroundColor: '#808B97'
  },
  headertext: {
    margin: 6,
    // textAlign:'left',
    fontWeight:'bold'
  },
  celltext: {
    marginVertical: 6,
    // textAlign:'center'
  },
  row: {
    flexDirection: 'row'
  },
  // btn: { width: 58, height: 18, backgroundColor: '#1E94A3',  borderRadius: 2 },
  btnText: {
    textAlign: 'center',
    color: '#1E94A3'
  },
  
    
})