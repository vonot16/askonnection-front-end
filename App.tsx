import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {Navigation} from './src/navigation/';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
      }}>

      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Navigation />
    </View>
  );
}
