import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Feather';

// import ImagePicker from 'react-native-image-crop-picker';
//constants
import {Height, Width} from '../../Helper/Dimensions';
import colors from '../../Helper/Colors';
import text from '../../Helper/Styles';
import {Events} from '../../Helper/Constants';
import UploadDoc from './UploadDoc';

export function AddEvent() {
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [others, onChangeothers] = React.useState('');
  const [date, setDate] = useState(new Date());
  const [image, setimage] = useState(
    'https://static.thenounproject.com/png/254260-200.png',
  );

  const [selectedValue, setSelectedValue] = useState('');

  const navigation = useNavigation();

  const chooseImageFromGallery = async () => {
    ImagePicker.openPicker({
      multiple: true,
      cropping: true,
    }).then((images) => {
      console.log(images);
      setimage(images.path);
    });
  };

  const chooseImageFromCamera = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((images) => {
      console.log(images);
    });
  };

  const gotoCaseDetails = () => {
    navigation.navigate('Case Details');
  };
  gotoAddEvents = () => {
    navigation.navigate('AddEvents');
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            margin: 8,
            borderRadius: 8,
            elevation: 2,
          }}>
          <View style={styles.view}>
            <Text style={[text.textMedium, {width: Width / 3}]}>
              {'Client Name'}
            </Text>
            <Text style={text.textMedium}> {':'} </Text>
            <View
              style={[
                styles.input,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                placeholder="Name"
                style={{color: '#000000', height: Height / 16}}
                onChangeText={onChangeText1}
                value={text1}
              />
              <Icon name="edit" size={16} color={colors.grey} />
            </View>
          </View>

          <View style={styles.view}>
            <Text style={[text.textMedium, {width: Width / 3}]}>
              {'Case #'}
            </Text>
            <Text style={[text.textMedium]}> {':'} </Text>
            <TextInput
              placeholder="Case"
              style={styles.input}
              onChangeText={onChangeText2}
              value={text2}
            />
          </View>
          <View style={styles.view}>
            <Text style={[text.textMedium, {width: Width / 3}]}>
              {'File #'}
            </Text>
            <Text style={[text.textMedium]}> {':'} </Text>
            <TextInput
              placeholder="File"
              style={styles.input}
              onChangeText={onChangeText3}
              value={text3}
            />
          </View>
          <View style={styles.view}>
            <Text style={[text.textMedium, {width: Width / 3}]}>
              {'Case Start Date'}
            </Text>
            <Text style={text.textMedium}> {':'} </Text>
            <View
              style={{
                backgroundColor: colors.bg2,
                width: Width / 2,
                height: Height / 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <DatePicker
                mode="date"
                useNativeDriver={false}
                format="DD-MM-YYYY"
                customStyles={{
                  dateIcon: {
                    // display: 'none',
                    position: 'relative',
                    // left: 8,
                    // top: 4,
                    //   marginLeft: 0,
                  },
                  dateInput: {
                    borderWidth: 0,
                  },
                }}
                date={date}
                onDateChange={setDate}
              />
            </View>
          </View>
          {/* <View style={[styles.view, {marginBottom: 10}]}>
            <Text style={styles.text}> Select Date </Text>
            <Text style={[styles.text, {flex: 1.5}]}> : </Text>
            <DatePicker
              mode="date"
              useNativeDriver={false}
              format="DD-MM-YYYY"
              customStyles={{
                dateIcon: {
                  // display: 'none',
                  position: 'relative',
                  left: 0,
                  // top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  // marginLeft: 36,
                  borderRadius: 8,
                  borderWidth: 0,
                  backgroundColor: colors.bg2,
                },
              }}
              date={date}
              onDateChange={setDate}
            />
          </View> */}
          <View style={styles.view}>
            <Text style={[text.textMedium, {width: Width / 3}]}>Type </Text>
            <Text style={text.textMedium}> : </Text>
            <View
              style={{
                backgroundColor: colors.bg2,
                width: Width / 2,
                height: Height / 16,
                justifyContent: 'center',
                borderRadius: 4,
              }}>
              <Picker
                selectedValue={selectedValue}
                style={{
                  color: '#000000',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue, itemIndex)
                }>
                {Events.map((Events) => {
                  return <Picker.Item label={Events.n} value={Events.n} />;
                })}
              </Picker>
            </View>
          </View>
          <View style={styles.view}>
            <Text style={[text.textMedium, {width: Width / 3}]}>
              {'If others*'}
            </Text>
            <Text style={[text.textMedium]}> {':'} </Text>
            <TextInput
              placeholder="others"
              style={styles.input}
              onChangeText={onChangeothers}
              value={text2}
            />
          </View>

          <View>
            <UploadDoc />
            {/* <Text style={styles.text}> Upload Documents : </Text>
          <View style={styles.view}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: image }} />
               <TouchableOpacity  onPress={chooseImageFromGallery} style={styles.buttons}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity  onPress={chooseImageFromCamera} style={styles.buttons}   >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>       
          </View> */}
          </View>

          <View style={[styles.view, {paddingBottom: 20}]}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={gotoCaseDetails}>
              <Text style={{color: colors.black}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={gotoCaseDetails}>
              <Text style={{color: colors.white}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 10,
  },
  input: {
    height: Height / 16,
    width: Width / 2,
    backgroundColor: colors.bg2,
    // margin: 12,
    borderRadius: 4,
    padding: 10,
  },
  buttons: {
    height: Height / 16,
    width: Width / 3,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cancelButton: {
    height: Height / 16,
    width: Width / 3,
    backgroundColor: colors.bg2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: colors.black,
    fontWeight: 'bold',
    flex: 2,
  },
  textColon: {
    flex: 0.8,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default AddEvent;
