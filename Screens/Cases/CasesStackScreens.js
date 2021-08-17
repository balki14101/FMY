import React from 'react';
import {Image} from 'react-native';
//library
import {createStackNavigator} from '@react-navigation/stack';

import appLogo from '../../assets/images/FYLogo.png';
import ProfileOptions from '../../routes/profileOptions';

//screen import
import CaseHome from './CaseHome';
import AddCase from './AddCase';
import AddEvents from './AddEvents';
import CaseDetails from './CaseDetails';

const CaseStack = createStackNavigator();

export default function CasesStackScreens() {
  const headerOptions = {
    headerLeft: () => (
      <Image
        source={appLogo}
        style={{width: 96, height: 64, resizeMode: 'center'}}
      />
    ),
    headerRight: () => <ProfileOptions />,

    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'roboto_medium',
    },
  };
  return (
    <CaseStack.Navigator
      screenOptions={{
        headerTintColor: '#000000',
        headerTitleAlign: 'center',
      }}>
      <CaseStack.Screen
        name="Cases"
        component={CaseHome}
        options={headerOptions}
      />
      <CaseStack.Screen
        name="Add Case"
        component={AddCase}
        options={headerOptions}
      />
      <CaseStack.Screen
        name="Add Events"
        component={AddEvents}
        options={headerOptions}
      />
      <CaseStack.Screen
        name="Case Details"
        component={CaseDetails}
        options={headerOptions}
      />
    </CaseStack.Navigator>
  );
}
