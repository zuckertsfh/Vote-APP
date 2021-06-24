import React, {useState} from 'react';
// import {  } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ActivityIndicator,
  Colors,
  Headline,
  Subheading,
  TextInput as PaperInput,
} from 'react-native-paper';
// import Icon from 'react-native-vector-icons';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Assets from '../assets';
import {Button as CustomButton} from '../components';

import loginApi from '../api/login';

import styles from '../styles';
const primaryColor = '#FF6000';

const LoginPage = ({navigation}) => {
  const CustomFonts = Assets.CustomFonts;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoad, setLoad] = useState(false);
  // test24 = () => {console.log("NOTHING HAPPENED");};

  const test = () => {
    console.log('RUN WHEN RENDER');
  };

  const _storeData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      console.log(jsonValue);
      await AsyncStorage.setItem('@data_login', jsonValue);
      console.log("Finish save data");
    } catch (error) {
      console.log(error);
    }
  };

  const api = async () => {
    let json = {
      username: username,
      password: password,
    };

    setLoad(true);
    let data = await loginApi({request: json});
    if (data !== null) {
      console.log(data);
      _storeData(data);
      navigation.replace('Home');
    }
    setLoad(false);
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView style={styles.pad}>
        <View style={{height: 30}}></View>
        <Headline style={{color: primaryColor, fontFamily: CustomFonts.medium}}>
          Let's Sign you in.
        </Headline>
        <Subheading style={{fontFamily: CustomFonts.regular}}>
          Don't waste your voting rights, let's choose your best candidate
        </Subheading>
        <View style={{height: 20}}></View>
        <View>
          <PaperInput
            theme={{roundness: 10}}
            style={{
              backgroundColor: 'transparent',
              fontFamily: CustomFonts.regular,
            }}
            mode="outlined"
            label=""
            onChangeText={value => {
              console.log(value);
              setUsername(value);
            }}
            placeholder="Username"
            left={<PaperInput.Icon name="account" disabled={true} />}
          />
        </View>
        <View style={{height: 5}}></View>
        <View>
          <PaperInput
            theme={{roundness: 10}}
            style={{
              backgroundColor: 'transparent',
              fontFamily: CustomFonts.regular,
            }}
            mode="outlined"
            onChangeText={value => setPassword(value)}
            secureTextEntry
            label=""
            placeholder="Password"
            left={<PaperInput.Icon name="lock" disabled={true} />}
          />
        </View>

        <View style={{height: 50}}></View>

        {isLoad ? <ActivityIndicator /> : <CustomButton func={api} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
