import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from "react-native";
import LogIn from './navigation/LogIn';
import Home from './navigation/Home';
import CreateAccount from './navigation/CreateAccount';

const Stack = createStackNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ 
            title: 'Welcome to Chat',
            headerStyle: {
              backgroundColor: 'rgb(33, 150, 243)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Chat Room',
            headerBackTitle: 'Exit chat',
            headerStyle: {
              backgroundColor: 'rgb(33, 150, 243)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen
          name="СreateAccount"
          component={CreateAccount}
          options={{
            title: 'Сreate a new account',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: 'rgb(33, 150, 243)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: 'center',
    backgroundColor: "rgb(0,134,255)",
    width: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 300,
  },
});
