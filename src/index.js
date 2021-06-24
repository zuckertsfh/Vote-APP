import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SplashPage from './pages/splash';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: 'white'},
          }}></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: 'white'},
          }}></Stack.Screen>
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
