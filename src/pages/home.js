import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import getCandidates from '../api/candidates';
import {FlatList} from 'react-native';
const Home = ({navigation}) => {
  const [data, setData] = useState(null);

  const [isLoaded, setLoad] = useState(true);
  useEffect(async () => {
    //   setLoad(true);
    let token = await _getData();
    console.log(token);
    let json = await getCandidates(token);
    console.log('Udah di use Effect >>>>>>> ', json);
    console.log(isLoaded);
    setData(json);
    setLoad(false);
    // }

    return () => {
      // setLoad(false);
    };
  }, [isLoaded]);

  const _getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@data_login');
      console.log('Finish Read Data');
      console.log(jsonValue);
      const json = JSON.parse(jsonValue);
      return json.token;
    } catch (error) {
      console.log('This is error');
      console.log(error);
    }
  };

  const renderItem = ({item}) => <Item name={item.name} photo={item.photo} />;

  return (
    <SafeAreaView>
      {isLoaded ? (
        <Text>Ini lagi load</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const Item = props => (
  <View style={styles.card}>
    <Image source={{uri: 'http://192.168.4.4:5000/' + props.photo}} />
    <Text>{props.name}</Text>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
});
