import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 32,
  },
});


export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name},£ {item.price}.00
            </Text>
          )}
      />
    </SafeAreaView>
  ); 
};