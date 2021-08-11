import React from 'react';
//library
import {createStackNavigator} from '@react-navigation/stack';

//screen import
import CaseHome from './CaseHome';
import AddCase from './AddCase';
import AddEvents from './AddEvents';
import CaseDetails from './CaseDetails';

const CaseStack = createStackNavigator();

export default function CasesStackScreens() {
  return (
    <CaseStack.Navigator
      screenOptions={{
        headerTintColor: '#000000',
        headerTitleAlign: 'center',
      }}>
      <CaseStack.Screen name="Cases" component={CaseHome} />
      <CaseStack.Screen name="Add Case" component={AddCase} />
      <CaseStack.Screen name="Add Events" component={AddEvents} />
      <CaseStack.Screen name="Case Details" component={CaseDetails} />
    </CaseStack.Navigator>
  );
}
