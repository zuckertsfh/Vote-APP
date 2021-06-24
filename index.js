/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

// import {Color} from 'react-native/Libraries/NewAppScreen';

import {configureFonts, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';


const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FF6000',
      accent: '#f1c40f',
    },
  };

export default function Main(){
    return (
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
