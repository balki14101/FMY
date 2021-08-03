import React from 'react'
//library
import { createStackNavigator } from '@react-navigation/stack';

//screen import 
import CaseHome from './CaseHome'
import AddCase from './AddCase';
import AddEvents from './AddEvents'
import CaseDetails from './CaseDetails'



const CaseStack = createStackNavigator();

export default function CasesStackScreens()  {
  return (

    <CaseStack.Navigator>
      <CaseStack.Screen name="Cases" component={CaseHome} />
      <CaseStack.Screen name="AddCase" component={AddCase} />
      <CaseStack.Screen name="AddEvents" component={AddEvents} />
      <CaseStack.Screen name="CaseDetails" component={CaseDetails} />
    </CaseStack.Navigator>
    
  )
}
