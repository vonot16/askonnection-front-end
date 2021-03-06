import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { Register } from '../screens/Register';
import { Main } from '../screens/Main';

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />

        <Stack.Screen options={{ headerShown: false }}
          name="Register"
          component={Register}
        />

        <Stack.Screen options={{ headerShown: false }}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}