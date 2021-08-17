import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

//import constants
import colors from '../../Helper/Colors';
import {Height, Width} from '../../Helper/Dimensions';
import text from '../../Helper/Styles';

export default function Index() {
  const [search, setSearch] = useState('');
  //Table
  const tableHead = ['#', 'Client', 'Case #', 'Type', 'Next Date'];
  const tableData = [
    ['1', 'Name1', '1/3', 'Property', '5-1-2001'],
    ['2', 'Name2', '1/1', 'Crime', '5-1-2001'],
    ['3', 'Name3', '2/3', 'Property', '5-1-2001'],
    ['4', 'Name4', '2/2', 'Property', '5-1-2001'],
  ];
  //Card
  const card = [
    {name: 'Liam', case: '1/3', type: 'Property', date: '5-1-2001'},
    {name: 'Olivia', case: '1/1', type: 'Crime', date: '5-1-2001'},
    {name: 'Emma', case: '2/3', type: 'Property', date: '5-1-2001'},
    {name: 'Ava', case: '2/2', type: 'Property', date: '5-1-2001'},
    {name: 'Charlotte', case: '1/3', type: 'Crime', date: '5-1-2001'},
  ];

  //Navigation
  const navigation = useNavigation();

  //Updating Search box
  const updateSearch = (search) => {
    setSearch(search);
  };

  //Navigating to Add case Screen
  const gotoAddCase = () => {
    navigation.navigate('Add Case');
  };

  //Navigating to Case details screen
  const gotoCaseDetails = () => navigation.navigate('Case Details');

  _alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
  };
  //button for add details screen
  const element = (data, index) => (
    <TouchableOpacity onPress={gotoCaseDetails}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{data}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
        }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <ScrollView>
        <View style={{marginTop: 8, backgroundColor: colors.bg2}}>
          {card.map((card) => {
            return (
              <TouchableOpacity onPress={gotoCaseDetails}>
                <View style={styles.cardView}>
                  <View style={styles.cardContentView}>
                    <Text style={text.textMedium}>Name</Text>
                    <Text style={text.textMedium}> : </Text>
                    <Text style={text.textMedium}>{card.name}</Text>
                  </View>
                  <View style={styles.cardContentView}>
                    <Text style={text.textMedium}>Type</Text>
                    <Text style={text.textMedium}> : </Text>
                    <Text style={text.textMedium}>{card.type}</Text>
                  </View>
                  <View
                    style={[
                      styles.row,
                      {justifyContent: 'space-between', alignItems: 'center'},
                    ]}>
                    <View style={styles.cardContentView}>
                      <Text style={text.textMedium}>Next Date</Text>
                      <Text style={text.textMedium}> : </Text>
                      <Text style={text.textMedium}>{card.date}</Text>
                    </View>
                    <View style={styles.cardContentView}>
                      <Text style={text.textMediumVariant}>Case #</Text>
                      <Text style={text.textMediumVariant}> : </Text>
                      <Text style={text.textMediumVariant}>{card.case}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
        }}>
        <TouchableOpacity onPress={gotoAddCase}>
          <View
            style={[
              styles.view,
              {backgroundColor: colors.button, borderRadius: 16},
            ]}>
            <AddIcon name="add" size={24} color="#f6f6f6" />
            <Text
              style={{
                fontFamily: 'roboto_medium',
                fontSize: 16,
                color: colors.bg,
              }}>
              Add Case
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  cardView: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    padding: 16,
    // height: Height / 8,
  },
  cardContentView: {
    flexDirection: 'row',
    paddingVertical: 4,
  },

  //Table Styles
  containerStyle: {
    borderTopColor: colors.bg,
    borderBottomColor: colors.bg,
    backgroundColor: colors.bg,
  },
  inputContainerStyle: {
    borderRadius: 10,
    backgroundColor: colors.white,
    // width: Width / 1.2,
  },
  head: {
    height: Height / 15,
    backgroundColor: '#808B97',
  },
  headertext: {
    margin: 6,
    textAlign: 'center',
    fontWeight: 'bold',
    // padding:4
  },
  celltext: {
    marginVertical: 6,
    // textAlign:'center',
    paddingLeft: 8,
    // paddingRight:18
  },
  row: {
    flexDirection: 'row',
  },
  // btn: { width: 58, height: 18, backgroundColor: '#1E94A3',  borderRadius: 2 },
  btnText: {
    textAlign: 'center',
    color: colors.button,
  },
});
