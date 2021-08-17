import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import appLogo from '../../assets/images/FYLogo.png';
import ProfileOptions from '../../routes/profileOptions';
//screen import
import HomeReview from '../appScreens/reviewsTabScreens/reviewHome';
import SettingsHome from '../appScreens/settingsTabScreens/settingHometab';
import ProfileHome from '../appScreens/profileTabScreens/home';
import SubcriptionsHome from '../appScreens/subcriptionsTabScreens/homeTopTabSub';

const accountStack = createStackNavigator();
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

const Account = () => {
  return (
    <accountStack.Navigator
      screenOptions={{
        headerTintColor: '#000000',
        headerTitleAlign: 'center',
      }}>
      <accountStack.Screen
        name="Review"
        component={HomeReview}
        options={headerOptions}
      />
      <accountStack.Screen
        name="Settings"
        component={SettingsHome}
        options={headerOptions}
      />
      <accountStack.Screen
        name="Profile"
        component={ProfileHome}
        options={headerOptions}
      />
      <accountStack.Screen
        name="Subscription"
        component={SubcriptionsHome}
        options={headerOptions}
      />
    </accountStack.Navigator>
  );
};
export default Account;
