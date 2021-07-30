import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SubcriptionsHome from '../Screens/appScreens/subcriptionsTabScreens/homeTopTabSub'
import { Image } from 'react-native'
import appLogo from '../assets/images/FYLogo.png'
import ProfileOptions from './profileOptions'

const SubcriptionStack = createStackNavigator();

export default function SubcriptionStackScreen() {

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
        <SubcriptionStack.Navigator>
            <SubcriptionStack.Screen name="home" component={SubcriptionsHome} options={headerOptions} />
        </SubcriptionStack.Navigator>
    )
}

