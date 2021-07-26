import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './components/SignUp';
import login from './components/login';
import Home from './components/Home';
import Account from './components/Account';
import shopinfo from './components/shopinfo';

const Stack = createStackNavigator()

class App extends Component {
  render(){
    return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="shopinfo" component={shopinfo} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  };
}

const styles = StyleSheet.create({

  container: {
       flex: 1,
       justifyContent: 'center',
       backgroundColor: '#ffc0cb',
       paddingLeft: 60,
       paddingRight: 60,
  },

});
   




export default App
