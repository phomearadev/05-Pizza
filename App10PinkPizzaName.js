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
];

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
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
    padding: 30,
    marginVertical: 18,
    marginHorizontal: 36,
    fontSize: 15,
  },
  name: {
    fontSize: 10,
  },
});

export default App;