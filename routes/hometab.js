import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/appScreens/homeTabScreens/home';
import {Image, View, Modal, TouchableOpacity, Text} from 'react-native';
import styles from './profileOptions';
import appLogo from '../assets/images/FYLogo.png';
import ProfileLogo from 'react-native-vector-icons/FontAwesome';
import DropDownIcon from 'react-native-vector-icons/AntDesign';

import ProfileOptions from './profileOptions';

const HomeStack = createStackNavigator();

export default function HomeStackScreen({navigation}) {
  const headerOptions = {
    headerStyle: {
      backgroundColor: 'white',
      height: 70,
    },
    headerLeft: () => (
      <Image
        source={appLogo}
        style={{width: 96, height: 67, left: 20, resizeMode: 'center'}}
      />
    ),
    headerRight: () => <ProfileOptions />,
    headerTitle: '',
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={headerOptions}
      />
    </HomeStack.Navigator>
  );
}
