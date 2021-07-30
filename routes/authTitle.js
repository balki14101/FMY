import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function AuthTitle() {
    const navigation = useNavigation()
    const [showOptions, setShowOptions] = React.useState(false)
    return (
        <View style={{ marginLeft: 60 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.btnText}>Lawyer Sign In</Text>
                </TouchableOpacity>
                <View style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                    paddingLeft: 10
                }} />
                <TouchableOpacity onPress={() => setShowOptions(true)}>
                    <Text style={styles.loginText}>LOGIN/SIGNUP</Text>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showOptions}
                >
                    <View style={styles.modalCenteredView}
                        onStartShouldSetResponder={() => {
                            setShowOptions(!showOptions);
                        }}>
                        <View style={styles.menuModalView}>
                            <Text style={styles.modalText}>LOGIN/SIGNUP</Text>
                            <Text style={styles.subTitle}>10 Digit Mobile Number</Text>
                            <TextInput
                                style={styles.phoneInput} />
                            <TouchableOpacity style={styles.small}>
                                <Text>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    signupBtn: {
        backgroundColor: '#28899B',
        borderRadius: 6,
        height: 25,
        width: 100,
        paddingTop: 3,

    },
    btnText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'openSans_regular'
    },
    loginText: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'roboto_medium',
        paddingTop: 3,
        paddingLeft: 10
    },
    modalCenteredView: {
        paddingTop: 50,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',


    },
    menuModalView: {
        width: '70%',

        backgroundColor: '#fefefe',
        borderRadius: 5,
        position: 'absolute',
        right: 5,
        top: 5,
        marginTop: 50,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        padding: 10

    },
    modalText: {

        fontSize: 14,
        color: 'black',
        fontFamily: 'roboto_medium',

        borderBottomColor: '#00000029',
        borderBottomWidth: 1

    },
    phoneInput: {
        borderColor: '#28899B',
        borderWidth: 1,
        borderRadius: 6,
        height: 30,
        marginTop: 10
    },
    subTitle: {
        fontSize: 12,
        color: '#3F433D',
        paddingTop: 10
    }

})