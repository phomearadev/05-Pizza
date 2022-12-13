import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';


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





const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name},£ {item.price}.00</Text>
          )}
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
  title: {
    fontSize: 32,
  },
});

export default App;