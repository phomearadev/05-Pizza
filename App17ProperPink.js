import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [DATA, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://raw.githubusercontent.com/chrismatchett/met-expo-demos-2/main/assets/pizza.json');
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
  console.error(error);
  } finally {
  setLoading(false);
  }
  }

  
  useEffect(() => {
    getMovies();
  }, []);

  

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/chrismatchett/met-expo-demos-2/main/assets/pizza.json');
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
   }


  const renderItem1 = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress(JSON.stringify(item))
    }>
      <Text style={styles.menuitem}>{item.name}                               Price: £{item.price}</Text>
    </TouchableOpacity>
  );

  const onPress = (msg) => {
    //alert(msg);
    navigation.navigate('Order', { pizza: msg });
  };
  
  const renderItem2 = ({ item }) => (
    <Item name={item.price}
    />
  );

  const renderItem3 = ({ item }) => (
    <Item name={item.description}
    />
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem1}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  menuitem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    //alignItems: 'center',
    width: 350,
    backgroundColor: '#f9c2ff',
    padding: 30,
    marginVertical: 18,
    marginHorizontal: 16,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default App;