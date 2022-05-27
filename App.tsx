import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import { Navigation } from './src/navigation/';

export default function App() {
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
