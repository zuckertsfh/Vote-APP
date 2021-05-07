import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

import styles from '../styles';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.pad}>
        <Text>Login</Text>
        <Text>Username</Text>
        <TextInput autoCompleteType='username' style={styles.inputText} defaultValue="Username"></TextInput>
        <Text>Password</Text>
        <TextInput autoCompleteType='password' style={styles.inputText} defaultValue="Password"></TextInput>
        <Button title="Login" onPress={() => {}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default styles;
