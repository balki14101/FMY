import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Feather';
import Doc from 'react-native-vector-icons/Ionicons';
// import ImagePicker from 'react-native-image-crop-picker';
//constants
import {Height, Width} from '../../Helper/Dimensions';
import text from '../../Helper/Styles';
import colors from '../../Helper/Colors';

function CaseDetails() {
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [others, onChangeothers] = React.useState('');
  const [date, setDate] = useState(new Date());
  const [image, setimage] = useState(
    'https://static.thenounproject.com/png/254260-200.png',
  );

  const [selectedValue, setSelectedValue] = useState('');

  const EventsCard = [
    {event: 'Vakalat', date: '1-Oct-21', doc: 'Doc.pdf'},
    {event: 'Hearing', date: '10-Oct-21', doc: 'Doc.pdf'},
    {event: 'Application', date: '21-Oct-21', doc: 'Doc.pdf'},
  ];

  const navigation = useNavigation();

  const gotoCaseHome = () => navigation.navigate('Cases');
  const gotoAddEvents = () => navigation.navigate('Add Events');
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            margin: 8,
            borderRadius: 8,
            elevation: 2,
            paddingBottom: 8,
          }}>
          <View style={[styles.view, {paddingLeft: 15, paddingRight: 5}]}>
            <Text style={[styles.text, {flex: 2}]}> Client Name </Text>
            <Text style={[styles.text, {flex: 0.9}]}> : </Text>
            <TextInput
              placeholder="Name"
              style={[styles.input, {flex: 2.5}]}
              onChangeText={onChangeText1}
              value={text1}
            />
            <Icon name="edit" size={10} />
          </View>
          <View style={[styles.view, {paddingHorizontal: 15}]}>
            <Text style={[styles.text, {flex: 2}]}> Case Start Date </Text>
            <Text style={[styles.text, {flex: 1}]}> :</Text>
            <DatePicker
              mode="date"
              useNativeDriver={false}
              format="DD-MM-YYYY"
              customStyles={{
                dateIcon: {
                  //   display: 'none',
                  position: 'relative',
                  //   left: 0,
                  //   top: 4,
                  //   marginLeft: 0,
                },
                dateInput: {
                  //   marginLeft: 25,
                  // margin: 1,
                  // height: Height / 16,
                  backgroundColor: colors.bg2,
                  borderRadius: 8,
                  borderWidth: 0,
                  // flex:2
                },
              }}
              date={date}
              onDateChange={setDate}
            />
          </View>
          <View style={[styles.view, {paddingHorizontal: 15}]}>
            <Text style={[styles.text, {flex: 2}]}> Case # </Text>
            <Text style={[styles.text, {flex: 0.8}]}>:</Text>
            <TextInput
              placeholder="Case"
              style={[styles.input, {flex: 2.5}]}
              onChangeText={onChangeText2}
              value={text2}
            />
          </View>
          <View style={[styles.view, {paddingHorizontal: 15}]}>
            <Text style={[styles.text, {flex: 2}]}> File # </Text>
            <Text style={[styles.text, {flex: 0.8}]}>: </Text>
            <TextInput
              placeholder="File"
              style={[styles.input, {flex: 2.5}]}
              onChangeText={onChangeText3}
              value={text3}
            />
          </View>
        </View>
        {/* <View
          style={{
            alignItems: 'center',
            paddingVertical: 10,
            marginTop: 10,
            backgroundColor: colors.bg2,
          }}>
          <Text style={[styles.text, {fontSize: 16, color: colors.button}]}>
            Events
          </Text>
        </View>
        {EventsCard.map((card) => {
          return (
            <View style={styles.cardView}>
              <View style={styles.cardContentView}>
                <Text style={text.textMedium}>Event</Text>
                <Text style={text.textMedium}> : </Text>
                <Text style={text.textMedium}>{card.event}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.cardContentView}>
                  <Text style={text.textMedium}>Date</Text>
                  <Text style={text.textMedium}> : </Text>
                  <Text style={text.textMedium}>{card.date}</Text>
                </View>
                <View style={styles.cardContentView}>
                  <Doc name="document-attach-outline" size={12} />
                  <Text style={text.textRegularVariant}>{card.doc}</Text>
                </View>
              </View>
            </View>
          );
        })} */}
        <View style={styles.view}>
          <TouchableOpacity style={styles.buttons} onPress={gotoAddEvents}>
            <Text style={{color: colors.white}}>Add Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={gotoCaseHome}>
            <Text style={{color: colors.white}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    height: Height / 16,
    // width: Width / 4,
    backgroundColor: colors.bg2,
    marginTop: 12,
    borderRadius: 4,
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
    alignItems: 'center',
  },
  buttons: {
    height: Height / 16,
    width: Width / 3,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnSection: {
    width: 325,
    height: 100,
    backgroundColor: '#1E94A3',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  text: {
    color: colors.black,
    fontWeight: 'bold',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text1: {
    margin: 6,
    textAlign: 'center',
  },
});
export default CaseDetails;
