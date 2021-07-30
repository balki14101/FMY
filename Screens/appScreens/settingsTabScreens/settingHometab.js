import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CalenderSettings from './calenderSettings'
import AvailabilitySettings from './availabilitySettings'
import { Wave } from 'react-native-animated-spinkit'

const Tab = createMaterialTopTabNavigator();


export default function SettingsHome({ navigation }) {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'lightgrey',
                labelStyle: { fontSize: 12 },
                indicatorStyle: {
                    backgroundColor: '#28899B',
                },

            }}>
            <Tab.Screen name="availability" component={AvailabilitySettings} options={{ tabBarLabel: 'Availability Settings' }} />
            <Tab.Screen name="calender" component={CalenderSettings} options={{ tabBarLabel: 'Slot Settings' }} />


        </Tab.Navigator>
    )
}