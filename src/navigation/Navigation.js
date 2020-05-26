
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import ChatScreen from "../screens/ChatScreen"
import LoginScreen from "../screens/LoginScreen"


const Stack = createStackNavigator();




export default function App() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "Login" component ={LoginScreen} />
        <Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>
      </NavigationContainer>

      
    );
  }

