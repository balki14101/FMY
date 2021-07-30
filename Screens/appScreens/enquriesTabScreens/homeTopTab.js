import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AllAppointments from './allAppointments'
import AcceptedAppointments from './acceptedAppointents'
import TodaysAppointments from './todaysAppointments'
import PendingAppointments from './pendingAppointments'
const Tab = createMaterialTopTabNavigator();

export default function EnquiryHome({ navigation }) {
    return (
        <Tab.Navigator
            swipeEnabled={false}
            tabBarOptions={{
                scrollEnabled: true,

                activeTintColor: "black",
                inactiveTintColor: 'lightgrey',
                indicatorStyle: {
                    backgroundColor: '#28899B',
                },
                labelStyle: {
                    fontSize: 12,
                    fontFamily: 'openSans_semiBold'
                },
                tabStyle: {
                    width: 100
                }
            }}>

            <Tab.Screen name='all' component={AllAppointments} options={{ title: 'ALL' }} />
            <Tab.Screen name="today" component={TodaysAppointments} options={{ title: 'TODAY\'S' }} />
            <Tab.Screen name='pending' component={PendingAppointments} options={{ title: 'PENDING' }} />
            <Tab.Screen name="approved" component={AcceptedAppointments} options={{ title: 'ACCEPTED' }} />

        </Tab.Navigator>
    )
}