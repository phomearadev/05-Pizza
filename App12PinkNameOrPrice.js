import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 1,
			name: "Margherita",
			veg: true,
			price: 3,
  },
  {
    id: 2,
			name: "Tandoori Paneer",
			veg: true,
			price: 7,
  },
  {
    id: 3,
			name: "Veggie Supreme",
			veg: true,
			price: 8,
  },
  {
    id: 4,
      name: "Double Paneer Supreme",
      veg: true,
      price: 6,
  },
  {
    id: 5,
      name: "Veggie Kebab Surprise",
      veg: true,
      price: 4,
  },
  {
    id: 6,
      name: "Chicken Supreme",
      veg: false,
      price: 7,
  },
];

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const App = () => {
  const renderItem1 = ({ item }) => (
    <Item name={item.name}
    />
  );
  
  const renderItem2 = ({ item }) => (
    <Item name={item.price}
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