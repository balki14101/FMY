import React, {useState} from 'react'
import { Text, View ,Image,StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import ImagePicker from "react-native-customized-image-picker";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import ImagePicker from 'react-native-image-crop-picker';
//constants
import { Height, Width } from '../../Helper/Dimensions';
import colors from '../../Helper/Colors';
import { Events } from '../../Helper/Constants';




function CaseDetails() {
    const [text1, onChangeText1] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [others, onChangeothers] = React.useState("");
    const [date, setDate] = useState(new Date())
    const [image, setimage] = useState("https://static.thenounproject.com/png/254260-200.png")
   
  
  
  
    const [selectedValue, setSelectedValue] = useState("");

    const tableHead = ['Event', 'Date', 'Document'];
    const tableData = [
    ['1', 'Name1', '1/3'],
    ['2', 'Name2', '1/1'],
    ['3', 'Name3', '2/3'],
    ['4', 'Name4', '2/2']
  ];

    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={styles.view}>
                    <Text style={styles.text}> Client Name </Text>
                    <Text style={styles.text}> : </Text>
                    <TextInput
                        placeholder="Name"
                        style={styles.input}
                        onChangeText={onChangeText1}
                        value={text1}
                    />

                </View>
                 <View style={styles.view}>
          <Text style={styles.text}> Case Start Date </Text>
          <Text style={styles.text}>          : </Text>
          <DatePicker
            mode='date'
            useNativeDriver={false}
            format="DD-MM-YYYY"
            customStyles={{
            dateIcon: {
              display: 'none',
            //   position: 'relative',
            //   left: 0,
            //   top: 4,
            //   marginLeft: 0,
            },
            dateInput: {
              marginLeft: 25,
            },
          }}
            date={date}
            onDateChange={setDate}
          />
        </View>
                <View style={styles.view}>
                    <Text style={styles.text}> Case # </Text>
                    <Text style={styles.text}>          : </Text>
                    <TextInput
                        placeholder="Case"
                        style={styles.input}
                        onChangeText={onChangeText2}
                        value={text2}
                    />

                </View>
                <View style={styles.view}>
                    <Text style={styles.text}> File # </Text>
                    <Text style={styles.text}>              : </Text>
                    <TextInput
                        placeholder="File"
                        style={styles.input}
                        onChangeText={onChangeText3}
                        value={text3}
                    />

                </View>
                <View>
                      <Table borderStyle={{borderColor: 'transparent'}}>
                         <Row data={tableHead} style={styles.head} textStyle={styles.text1}/>
                            <Rows data={tableData} textStyle={styles.text1}/>
                     </Table>

                </View>
               
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:10
    },
  input: {
        height: Height/16,
        width: Width / 2,
        backgroundColor:'white',
        margin: 12,
        borderRadius:4,
        padding: 10,
    },
    buttons: {
        height: Height / 16,
        width: Width / 3,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
      
  },
     btnSection: {
       width: 325,
       height: 100,
       backgroundColor: '#1E94A3',
       color:'white',
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 3,
       marginBottom:10
  },
  text: {
    color: colors.black,
    fontWeight: 'bold'
    },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text1: { margin: 6,textAlign:'center' }
});
    export default CaseDetails