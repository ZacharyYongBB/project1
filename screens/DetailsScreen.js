import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { TouchableOpacity } from "react-native-gesture-handler";


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