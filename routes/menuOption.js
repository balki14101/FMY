
import React from 'react'

import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native'
import MenuIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';


export default function MenuOptions() {
    const [showOptions, setShowOptions] = React.useState(false)

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ flexDirection: 'row', right: 20 }} onPress={() => setShowOptions(true)}>
            <MenuIcon name="menu" color="#28899B" size={25} />

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
                        <TouchableOpacity style={{ alignItems: 'center', padding: 5 }} onPress={() => navigation.navigate('aboutUs')}>
                            <Text style={styles.modalText}>About Us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('contactUs')}>
                            <Text style={styles.modalText}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    modalCenteredView: {
        paddingTop: 50,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',


    },
    menuModalView: {
        width: 100,
        height: 70,
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

    },
    modalText: {
        textAlign: "center",
        fontSize: 12,
        color: 'black',
        fontFamily: 'roboto_medium',
        paddingTop: 10,

    },
})


