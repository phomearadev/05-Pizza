import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

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

  const renderItem1 = ({ item }) => (
    <Item name={item.name}
    />
  );
  
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;