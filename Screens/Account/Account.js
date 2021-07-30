import React from 'react';
import { Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import appLogo from '../../assets/images/FYLogo.png'



//screen import
import HomeReview from '../appScreens/reviewsTabScreens/reviewHome'
import SettingsHome from '../appScreens/settingsTabScreens/settingHometab'
import ProfileHome from '../appScreens/profileTabScreens/home'
import SubcriptionsHome from '../appScreens/subcriptionsTabScreens/homeTopTabSub'



const accountStack = createStackNavigator();
const header = {
    	
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

const Account = () => {
    return (
        <accountStack.Navigator>
            <accountStack.Screen
                name='Review'
                component={HomeReview}
            />
            <accountStack.Screen
                name='Settings'
                component={SettingsHome}

            />
            <accountStack.Screen
                name='Profile'
                component={ProfileHome}

            />
            <accountStack.Screen
                name='Subscription'
                component={SubcriptionsHome}

             />
        </accountStack.Navigator>

        
    )
}
export default Account