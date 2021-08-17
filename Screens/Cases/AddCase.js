import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
//import Constants
import {Height, Width} from '../../Helper/Dimensions';
import colors from '../../Helper/Colors';
import categories from '../../Helper/Constants';
import text from '../../Helper/Styles';

export function AddCase() {
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [selectedValue, setSelectedValue] = useState('java');

  const navigation = useNavigation();

  gotoCases = () => {
    navigation.navigate('Cases');
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 8,
          borderRadius: 8,
          elevation: 2,
        }}>
        <View style={styles.View}>
          <Text style={[text.textMedium, {width: Width / 4}]}>Client Name</Text>
          <Text style={[text.textMedium]}> : </Text>
          <TextInput
            placeholder="Name"
            style={[styles.input]}
            onChangeText={onChangeText1}
            value={text1}
          />
        </View>
        <View style={styles.View}>
          <Text style={[text.textMedium, {width: Width / 4}]}>Case #</Text>
          <Text style={[text.textMedium]}> : </Text>
          <TextInput
            placeholder="Case"
            style={[styles.input]}
            onChangeText={onChangeText2}
            value={text2}
          />
        </View>
        <View style={styles.View}>
          <Text style={[text.textMedium, {width: Width / 4}]}>File #</Text>
          <Text style={[text.textMedium]}> : </Text>
          <TextInput
            placeholder="File"
            style={[styles.input]}
            onChangeText={onChangeText3}
            value={text3}
          />
        </View>
        <View style={styles.View}>
          <Text style={[text.textMedium, {width: Width / 4}]}>Type </Text>
          <Text style={text.textMedium}> : </Text>
          <View
            style={{
              backgroundColor: colors.bg2,
              width: Width / 2,
              height: Height / 16,
              justifyContent: 'center',
              margin: 12,
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
              {categories.map((category) => {
                return <Picker.Item label={category.n} value={category.n} />;
              })}
            </Picker>
          </View>
        </View>
        <View style={[styles.View, {margin: 30}]}>
          <TouchableOpacity onPress={gotoCases} style={styles.buttons}>
            <Text style={{color: colors.white}}>Add Case</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={gotoCases} style={styles.cancelButton}>
            <Text style={{color: colors.black}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    height: Height / 10,
  },
  input: {
    height: Height / 16,
    width: Width / 2,
    backgroundColor: colors.bg2,
    margin: 12,
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
  },
});

export default AddCase;
