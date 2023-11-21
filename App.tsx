import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome';
import Item from './src/pages/Item';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={Welcome}/>
        <Stack.Screen name="item" component={Item}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}