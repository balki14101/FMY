import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SettingsHome from '../Screens/appScreens/settingsTabScreens/settingHometab'
import { Image } from 'react-native'

import appLogo from '../assets/images/FYLogo.png'

import ProfileOptions from './profileOptions'

const SettingsStack = createStackNavigator();

export default function SettingsStackScreen() {

    const headerOptions = {
        headerStyle: {
            backgroundColor: 'white',
            height: 70
        },
        headerLeft: () => (
            <Image source={appLogo} style={{ width: 96, height: 67, left: 20, resizeMode: 'center' }} />
        ),
        headerRight: () => (
            <ProfileOptions />
        ),
        headerTitle: "",

    }
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="home" component={SettingsHome} options={headerOptions} />
        </SettingsStack.Navigator>
    )
}

