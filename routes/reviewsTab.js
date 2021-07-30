import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeReview from '../Screens/appScreens/reviewsTabScreens/reviewHome'
import { Image } from 'react-native'
import appLogo from '../assets/images/FYLogo.png'
import ProfileOptions from './profileOptions'


const ReviewStack = createStackNavigator();

export default function ReviewStackScreen() {

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
        <ReviewStack.Navigator>
            <ReviewStack.Screen name="home" component={HomeReview} options={headerOptions} />
           
        </ReviewStack.Navigator>
    )
}

