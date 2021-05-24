import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';


const Stack = createStackNavigator();

// this holds all the screens that we have and allow us to 
// 

const Router = props => {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name={'Login Screen'}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
