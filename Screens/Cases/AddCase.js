import React, {useState} from 'react'
import { Text, View ,StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
//import Constants
import { Height, Width } from '../../Helper/Dimensions';
import colors from '../../Helper/Colors';
import categories from '../../Helper/Constants';


export function AddCase() {
    const [text1, onChangeText1] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [selectedValue, setSelectedValue] = useState("java");

    const navigation = useNavigation();  


    gotoCases = () => {
        navigation.navigate('Cases')
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.View}>
                <Text style={{ color: colors.black }}> Client Name </Text>
                <Text style={{ color: colors.black }}> : </Text>
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={onChangeText1}
                    value={text1}
                />

            </View>
            <View style={styles.View}>
                <Text style={{ color: colors.black }}> Case # </Text>
                <Text style={{ color: colors.black }}>          : </Text>
                <TextInput
                    placeholder="Case"
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                />

            </View>
            <View style={styles.View}>
                <Text style={{ color: colors.black }}> File # </Text>
                <Text style={{ color: colors.black }}>              : </Text>
                <TextInput
                    placeholder="File"
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={text3}
                />

            </View>
            <View style={styles.View}>
                <Text style={{ color: colors.black}}>Type </Text>
                <Text style={{ color: colors.black }}>        :</Text>
                <View style={{backgroundColor:colors.white,borderRadius:8}}>
                <Picker
                selectedValue={selectedValue}
                style={{height: Height/14, width: Width/2 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                {categories.map(category => {return<Picker.Item label={category.n} value={category.n} />})}
                 </Picker>
                </View>
            </View>
            <View style={[styles.View,{margin:30}]}>
                <TouchableOpacity onPress={gotoCases} style={styles.buttons}><Text>Add Case</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons}><Text>Save</Text></TouchableOpacity>

            </View>
      </View>
    )

}
const styles = StyleSheet.create({
    View: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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
      
  }
});

export default AddCase
