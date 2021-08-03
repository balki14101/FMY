import React, { useState } from 'react'
import { View,StyleSheet,Text, TouchableOpacity,Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import AddIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

//import constants
import colors from '../../Helper/Colors';
import { Width } from '../../Helper/Dimensions';




export default function Index() {

  const [search, setSearch] = useState('');

  // const tableHead = ['#', 'Client', 'Case', 'Type','Next Date'];
  // const tableData = [
  //                   ['1', '2', '3', '4', '4'],
  //                   ['2', 'b', 'c', 'd', '4'],
  //                   ['3', '2', '3', '4', '4'],
  //                   ['4', 'b', 'c', 'd', '4'],
  //                   ['5', 'b', 'c', 'd', '4']
                    
  // ];

  const tableHead = ['#', 'Client', 'Case', 'Type', 'Next Date'];
  const tableData = [
    ['1', 'Name1', '1/3', 'Property','5-1-2001'],
    ['2', 'Name2', '1/1', 'Crime','5-1-2001'],
    ['3', 'Name3', '2/3', 'Property','5-1-2001'],
    ['4', 'Name4', '2/2', 'Property','5-1-2001']
  ];
    const navigation = useNavigation();  


    const updateSearch = (search) => {
    setSearch(search);
  };

  const gotoAddCase = () => {
    navigation.navigate('AddCase')
  };

    _alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
  }
  
   const element = (data, index) => (
      <TouchableOpacity onPress={() => navigation.navigate('CaseDetails')}>
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
            <AddIcon name="add" size={30} color="#808080" />
          </TouchableOpacity>
        </View>
        <View>
          <Table  borderStyle={{borderColor: 'transparent'}}>
          <Row flexArr={[1,2,1,2,2]} data={tableHead} style={styles.head} textStyle={styles.headertext}/>
          {
            tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData }   textStyle={styles.celltext}/>
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
  // head: { height: 40, backgroundColor: '#f1f8ff' },
  // text: { margin: 0 }
  head: { height: 40, backgroundColor: '#808B97' },
  headertext: { margin: 6, textAlign: 'center' },
  celltext:{margin:6},
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  
    
})