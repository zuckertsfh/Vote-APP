import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import * as Assets from '../assets';

const CustomFonts = Assets.CustomFonts;
// const primaryColor = '#FF6000';

const CustomButton = ({func = ()=>{}, color = "#FF6000"}) => {
  return (
    <TouchableHighlight onPress={func} underlayColor="white">
      <View
        style={{
          borderRadius: 10,
          shadowColor: 'black',
          paddingTop: 12,
          paddingBottom: 12,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
        }}>
        <Text
          style={{
            color: Colors.white,
            fontFamily: CustomFonts.medium,
            fontSize: 16,
          }}>
          Login
        </Text>
      </View>
    </TouchableHighlight>
  );
};


export default CustomButton;