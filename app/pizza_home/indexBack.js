import * as React from 'react';
import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

function HomeScreen({ navigation }) {
 // const [text, onChangeText] = React.useState(null);
  //console.log(input);

  return (  
  <View style={{ flex: 1}}>  

    <View style={styles.container1}>
        <Image
        style={styles.magpiegraphic}
        source={require('C:/APP/05-Pizza/assets/magpie.png')} />
         <Text style={styles.magpietitle}> </Text>
    </View>

    <View style={styles.container2}>      
        <Text style={styles.moneytitle}>O'MARIO'S PIZZA </Text>
        <Text style={styles.moneytitle2}>The Best Pizza in Belfast </Text>
    </View>
 
    <View style={styles.container3}>
      <View style={styles.box}>  
        <Text style={styles.title}> Enter your Email Address  </Text>
        <TextInput 
        style={styles.title} onChangeText={(Text) => setInput(text)}
        style={styles.title}
        placeholder="Your Email Address"
        value={text}
        onChangeText={onChangeText}
      />
    </View>
    </View>

      <View style={styles.box}>  
        <Pressable
            onPress={() => 
            navigation.navigate('Payments', {
            emailAddress: text,
          })}>
            
              <View>
                  <Text style={styles.title}>
                  Get updates from O'Mario's Pizza
                  </Text>  
              </View>
        </Pressable>

      </View>
</View>
   
  );
}
      

function WelcomeScreen({ route, navigation }) {

  const { emailAddress} = route.params;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.heading1}>Welcome to Mario's</Text>
      <Text style={styles.spacer} >We will send updates to {emailAddress}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}


function MyPayment({route, navigation}) {
  const { emailAddress} = route.params;
  return (
       <View style={[styles.box,{
        marginTop: 300,
        marginBottom: 300,
        marginLeft: 75,
        marginRight: 75}
      ]}>  
      <Text>Congratulations! Updates and Offers from O'Mario's Pizza will be sent to...{emailAddress}</Text>
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
    paddingTop: 40,
    //backgroundColor: "dodgerblue",
    backgroundColor: "green",
    borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "gold",
    backgroundColor: "white",
    //borderWidth: 1,
    //borderColor: "brown",
    alignItems: "center",
  },
  container3: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 15,
    //flexDirection: "row",
    //backgroundColor: "silver",
    backgroundColor: "red",
    //borderWidth: 1,
    //borderColor: "brown",
  },
  box: {
    flex: 1,
    marginTop: 50,
    //marginBottom: 50,
   // marginLeft: 15,
   // marginRight: 15,
    height: 60,
    //alignItems: "center",
    margin: 10,
    backgroundColor: "white",
    //borderWidth: 2,
    //borderColor: "brown"
  },
  title: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    title: "ME",
  },
  magpietitle: {
    marginTop: 5,
    textAlign: "right",
    padding: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: 'white'
  },
  moneytitle: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 23,
    color: 'black'
  },
  moneytitle2: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 15,
    color: 'black'
  },
  magpiegraphic: {
    marginLeft:30,
    //marginTop:5,  
    width: 200,
    height: 203
  }
});

//export default App;