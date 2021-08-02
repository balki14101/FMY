
import React, {useState} from 'react'
import { Text, View ,Image,StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import ImagePicker from "react-native-customized-image-picker";
// import ImagePicker from 'react-native-image-crop-picker';
//constants
import { Height, Width } from '../../Helper/Dimensions';
import colors from '../../Helper/Colors';
import { Events } from '../../Helper/Constants';




export function AddEvent() {
    const [text1, onChangeText1] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [others, onChangeothers] = React.useState("");
    const [date, setDate] = useState(new Date())
    const [image, setimage] = useState("https://static.thenounproject.com/png/254260-200.png")
   
  
  
  
    const [selectedValue, setSelectedValue] = useState("");

  const navigation = useNavigation();
  

   const chooseImageFromGallery = async () => {
    	
     ImagePicker.openPicker({
       multiple: true,
       cropping:true,
      }).then(images => {
        console.log(images);
  setimage(images.path)
      });
    }
    
    const chooseImageFromCamera = async () => {
    	
    	ImagePicker.openCamera({
           width: 300,
           height: 400,
           cropping: true,
             }).then(images => {
                 console.log(images);    
        });
    }


    gotoAddEvents = () => {
        navigation.navigate('AddEvents')
    }
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
            <View style={styles.view}>
                <Text style={styles.text}>Select Events </Text>
                <Text style={styles.text}>:</Text>
                <View style={{backgroundColor:colors.white,borderRadius:8}}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{height: Height/14, width: Width/2 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    {Events.map(Events => {return<Picker.Item label={Events.n} value={Events.n} />})}
                  </Picker>
                </View>
          
            </View>
            
        <View style={styles.view}>
                <Text style={styles.text}> If others* </Text>
                <Text style={styles.text}>              : </Text>
                <TextInput
                    placeholder="others"
                    style={styles.input}
                    onChangeText={onChangeothers}
                    value={others}
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.text}> Select Date </Text>
          <Text style={styles.text}>     : </Text>
          <DatePicker
            mode='date'
            useNativeDriver={false}
            format="DD-MM-YYYY"
            customStyles={{
            dateIcon: {
              // display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
            date={date}
            onDateChange={setDate}
          />
        </View>
        <View>
          <Text style={styles.text}> Upload Documents : </Text>
          <View style={styles.view}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: image }} />
               <TouchableOpacity  onPress={chooseImageFromGallery} style={styles.buttons}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity  onPress={chooseImageFromCamera} style={styles.buttons}   >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>       
          </View>
        </View>
        
        <View style={styles.view} >
          <TouchableOpacity style={styles.buttons}  >
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>
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
  }
});

export default AddEvent
