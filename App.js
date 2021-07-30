import 'react-native-gesture-handler';

import React from 'react';
import SplashScreen from './Screens/splashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppScreensStack from './routes/app'
import AuthStackScreens from './routes/auth'
import Account from './Screens/Account/Account';
import Toast from 'react-native-toast-message';

const RootStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="splash" component={SplashScreen} />
        <RootStack.Screen name="auth" component={AuthStackScreens} />
        <RootStack.Screen name="app" component={AppScreensStack} />
        <RootStack.Screen name="account" component={Account} />

      </RootStack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};


