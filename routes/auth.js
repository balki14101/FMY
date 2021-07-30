import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native'

import appLogo from '../assets/images/FYLogo.png'
import Login from '../Screens/authScreens/login'
import Register from '../Screens/authScreens/register'
import MoreRegisterDetails from '../Screens/authScreens/moreDetails'
import MemberShipList from '../Screens/authScreens/memberShipList'
import ImagesAndDocuments from '../Screens/authScreens/imagesAndDocs'
import ResetPassword from '../Screens/authScreens/resetPassword'
import ChangePassword from '../Screens/authScreens/changePassword'
import DashBoard from '../Screens/authScreens/dashboard'
import MenuOptions from './menuOption'
import ProfileOptionsAuth from './profileOptionsAuth'
import AuthTitle from './authTitle'
import ContactUs from '../Screens/authScreens/contactUs'
import AboutUs from '../Screens/authScreens/aboutUs'

const AuthStack = createStackNavigator()

export default function AuthStackScreens() {
	
	
    const authScreensStyles = {
    	
        headerStyle: {
            backgroundColor: 'white',
            height: 70
        },
        headerLeft: () => (
            <Image source={appLogo} style={{ width: 96, height: 67, left: 20, resizeMode: 'center' }} />
        ),
        headerRight: () => (
            <ProfileOptionsAuth />
        ),
        headerTitle: "",

    }

    const dashboardScreensStyles = {
        headerStyle: {
            backgroundColor: 'white',
           
            height: 70
        },
        headerLeft: () => (
            <Image source={appLogo} style={{ width: 96, height: 67, resizeMode: 'center' }} />
        ),
        headerRight: () => (
            <MenuOptions />
        ),
        headerTitle: () => (
            <AuthTitle />
        ),

    }
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <AuthStack.Screen name="register" component={Register} options={authScreensStyles} />
            <AuthStack.Screen name="resetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <AuthStack.Screen name="changepassword" component={ChangePassword} options={{ headerShown: false }} />
            <AuthStack.Screen name="moreRegister" component={MoreRegisterDetails} options={authScreensStyles} />
            <AuthStack.Screen name="images" component={ImagesAndDocuments} options={authScreensStyles} />
            <AuthStack.Screen name="memberShip" component={MemberShipList} options={authScreensStyles} />
            <AuthStack.Screen name="dashboard" component={DashBoard} options={dashboardScreensStyles} />
            <AuthStack.Screen name="aboutUs" component={AboutUs} options={dashboardScreensStyles} />
            <AuthStack.Screen name="contactUs" component={ContactUs} options={dashboardScreensStyles} />
        </AuthStack.Navigator>
    )
}
