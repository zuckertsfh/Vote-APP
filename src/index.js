import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/home';
import LoginPage from './pages/login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Welcome'}}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
