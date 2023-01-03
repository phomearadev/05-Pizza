import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './APP/05-pizza/TheApp/pizza_home';
import WelcomeScreen from './APP/05-pizza/TheApp/pizza_welcome';
import OrderScreen from './APP/05-pizza/TheApp/pizza_order';



//https://designcode.io/react-hooks-handbook-fetch-data-from-an-api

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;