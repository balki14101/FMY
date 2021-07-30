import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackScreen from './hometab'
import EnquriesStackScreen from './enquireTab'
import SubcriptionStackScreen from './subcriptionTab'
import SettingsStackScreen from './settingsTab'
import ProfileStackScreen from './profileTab'
import ReviewStackScreen from './reviewsTab'
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EnquireIcon from 'react-native-vector-icons/Feather'
import SettingsIcon from 'react-native-vector-icons/Ionicons'
import ProfileIcon from 'react-native-vector-icons/FontAwesome'
import ReviewIcon from 'react-native-vector-icons/Fontisto'
import SubIcon from '../assets/images/svgs/subcription.svg'
import { Text } from 'react-native'

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {

    return (
        <Tab.Navigator
            shifting={false}
            activeColor="#EF7418"
            inactiveColor="white"
            barStyle={{
                backgroundColor: 'black',
                height: 60,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: <Text style={{ fontSize: 10 }}>HOME</Text>,
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon name="home" size={17} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Enquries"
                component={EnquriesStackScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: <Text style={{ fontSize: 10 }}>ENQUIRIES</Text>,
                    tabBarIcon: ({ color, size }) => (
                        <EnquireIcon name="monitor" size={17} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Subcriptions"
                component={SubcriptionStackScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: <Text style={{ fontSize: 10 }}>SUBSCR..</Text>,
                    tabBarIcon: ({ color, size }) => (
                        <SubIcon width="17px" height="17px" color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Settings"
                component={SettingsStackScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: <Text style={{ fontSize: 10 }}>SETTINGS</Text>,
                    tabBarIcon: ({ color, size }) => (
                        <SettingsIcon name="settings-sharp" size={17} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Reviews"
                component={ReviewStackScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: <Text style={{ fontSize: 10 }}>REVIEWS</Text>,
                    tabBarIcon: ({ color, size }) => (
                        <ReviewIcon color={color} name="commenting" size={17} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: <Text style={{ fontSize: 10 }}>PROFILE</Text>,
                    tabBarIcon: ({ color, size }) => (
                        <ProfileIcon name="user-o" size={17} color={color} />
                    ),
                }} />

        </Tab.Navigator>
    );
}




const AppStack = createStackNavigator()

export default function AppScreensStack() {
    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="App" component={HomeTabs} />
        </AppStack.Navigator>
    );
}