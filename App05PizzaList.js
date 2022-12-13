import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';



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
    <View style={{ flex: 1, topmargin: 100, padding: 24 }}>
      <Text>  </Text>
      <Text>  </Text>
      <Text>  </Text>
      <Text>  </Text>
      <Text>  </Text>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name},£ {item.price}.00</Text>
          )}
        />
      )}
    </View>
  );
};