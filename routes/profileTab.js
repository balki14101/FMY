import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileHome from '../Screens/appScreens/profileTabScreens/home'
import EditProfile from '../Screens/appScreens/profileTabScreens/editProfileTab'
import { Image } from 'react-native'
import appLogo from '../assets/images/FYLogo.png'
import ProfileOptions from './profileOptions'
import PDFViewer from '../Screens/appScreens/profileTabScreens/PDFView'

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {

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
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="home" component={ProfileHome} options={headerOptions} />
            <ProfileStack.Screen name="edit" component={EditProfile} options={headerOptions} />
            <ProfileStack.Screen name="pdf" component={PDFViewer} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    )
}

