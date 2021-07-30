import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Mysubcriptions from './mySubcriptions'
import PaymentHistory from './paymentHistory'

const Tab = createMaterialTopTabNavigator();

export default function SubcriptionsHome({ navigation }) {
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
            <Tab.Screen name="sub" component={Mysubcriptions} options={{ tabBarLabel: 'My Subscription' }} />



        </Tab.Navigator>
    )
}