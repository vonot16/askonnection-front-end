import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen options={{headerShown:false}}
          name="SignIn"
          component={SignIn}
        />
      </Navigator>
    </NavigationContainer>
  )
}