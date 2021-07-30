import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import appLpgo from '../assets/images/FYLogo.png'

export default function SplashScreen({navigation}) {

    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('auth')
        }, 1000);
    });
    return (
        <View style={styles.container}>
            <Image source={appLpgo} style={{ resizeMode: 'cover', }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})