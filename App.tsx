import 'react-native-gesture-handler';

import React from 'react';
import { LogBox, View } from 'react-native';
import { Navigation } from './src/navigation/';


export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
      }}>

      <Navigation />
    </View>
  );
}
