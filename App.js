import * as React from 'react';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

function HomeScreen({ navigation }) {
  return (  
  <View style={{ flex: 1}}>  

    <View style={styles.container1}>
        <Image
        style={styles.magpiegraphic}
        source={require('C:/APP/03-ViewPNG/assets/magpie.png')} />
         <Text style={styles.magpietitle}>Magpie Bank </Text>
    </View>

    <View style={styles.container2}>      
        <Text style={styles.moneytitle}>£1,000,000 </Text>
    </View>
 
    <View style={styles.container3}>
      <View style={styles.box}>  
        <Text style={styles.title}> MyHome </Text>
      </View>
      <View style={styles.box}>  
        <Pressable
          onPress={() => navigation.navigate('Payments',{
            itemId: 42,
            otherParam: 'anything you want here',
          })}>
          <Text style={styles.title}>
            MyPayments
          </Text>
        </Pressable>
      </View>
    </View>

  </View>    
  );
};

function MyPayment({route, navigation}) {
  const { itemId, otherParam } = route.params;
  return (
       <View style={[styles.box,{
        marginTop: 300,
        marginBottom: 300,
        marginLeft: 75,
        marginRight: 75}
      ]}>  
      <Text>Make a New Payment...</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
        <Stack.Screen name="Payments" component={MyPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "dodgerblue",
    borderWidth: 1,
    borderColor: "brown",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "gold",
    borderWidth: 1,
    borderColor: "brown",
  },
  container3: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "silver",
    borderWidth: 1,
    borderColor: "brown",
  },
  box: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 15,
    marginRight: 15,
    height: 160,
    alignItems: "center",
    margin: 10,
    backgroundColor: "chocolate",
    borderWidth: 2,
    borderColor: "brown"
  },
  title: {
    marginTop: 65,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    title: "ME",
  },
  magpietitle: {
    marginTop: 45,
    textAlign: "right",
    padding: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: 'white'
  },
  moneytitle: {
    textAlign: "center",
    marginTop: 120,
    fontSize: 23,
    color: 'black'
  },
  magpiegraphic: {
    marginLeft:30,
    marginTop:30,  
    width: 171,
    height: 103
  }
});

export default App;