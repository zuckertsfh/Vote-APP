import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableNativeFeedbackBase,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

const button = StyleSheet.create({
  btn: {},
});

const SplashPage = ({navigation}) => {
  return (
    <SafeAreaView style={{paddingLeft: 24, paddingRight: 24}}>
      <View
        style={{
          //   backgroundColor:'red',
          marginTop: 148,
          justifyContent: 'center',
          alignItems: 'center',
          //   width: 260,
          //   height: 195,
        }}>
        <Image
          style={styles.img}
          resizeMode={'contain'}
          source={require('../assets/vote-splash.png')}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>
          GENERAL
          <Text style={{fontWeight: 'bold', color: '#FF6000'}}> ELECTIONS</Text>
        </Text>

        <Text style={{fontWeight: '200', textAlign: 'center'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit et
          libero ac massa. Blandit in auctor leo, cursus. Sollicitudin lacus.
        </Text>
      </View>
      <View style={{height: 60}}></View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {navigation.replace('Login');}}>
          <View
            style={{
              backgroundColor: '#FF6000',
              width: 260,
            //   height:36,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:50
            }}>
            <Text style={{color:'white', paddingTop:12, paddingBottom:12}}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashPage;
