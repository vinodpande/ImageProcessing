import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login} from "./screens/Login";
import {Users} from "./screens/Users";
import {ProcessImage} from "./screens/ProcessInages";
import {Home} from "./screens/Home";

const Stack = createStackNavigator();

export const  ScreenStack =() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home',
          headerStyle: {
            backgroundColor: '#c1c1c1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#c1c1c1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        
        <Stack.Screen 
          name="User"
          component={Users}
          options={{
            title: 'User',
            headerStyle: {
              backgroundColor: '#c1c1c1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

          <Stack.Screen
            name="Process Images"
            component={ProcessImage}
            options={{
              title: 'Process Images',
              headerStyle: {
                backgroundColor: '#c1c1c1',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};