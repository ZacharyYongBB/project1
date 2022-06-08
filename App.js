import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList,Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { TouchableOpacity } from "react-native-gesture-handler";





function HomeScreen({ navigation }) {
 const [colorArray, setColorArray] = useState([]);

 function renderItem({ item }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", { ...item })}>
      <BlockRGB red={item.red} green={item.green} blue={item.blue} />
    </TouchableOpacity>
  );
}



 


 function resetColor() {
   setColorArray([]);
 }

 function addColor() {
  setColorArray([

    {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
      id: `${colorArray.length}`,
    },

    ...colorArray,
    
  ]);
}


useEffect(() => {
  navigation.setOptions({
    headerRight:() => <Button onPress={addColor} title="Add Color" />,
  });
});
useEffect(() => {
  navigation.setOptions({
    headerLeft:() => <Button onPress={resetColor} title="Reset" />,
  });
});




return (

  <View style={styles.container}>
  

    <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
  </View>
);






}



function DetailsScreen({ route }) {

  const { red, green, blue } = route.params;
 
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
      ]}>
      <View style={{ padding: 30 }}>
        <Text style={styles.detailText}>Red: {red}</Text>
        <Text style={styles.detailText}>Green: {green}</Text>
        <Text style={styles.detailText}>Blue: {blue}</Text>
      </View>
    </View>
  );
 }
 

 

const Stack = createStackNavigator();

export default function App() {
 return (
  <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Colour List" component={HomeScreen} />
       <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "space-evenly",
   backgroundColor: "white",
   alignItems: "center",
 },
 list: {
   width: "100%",
 },
 addColor: {
   fontSize:25,
   color:'purple',
   backgroundColor:'beige',
   padding:3,
   borderRadius:4,
   borderColor:'black',
   borderWidth:1.3,
 }
});
