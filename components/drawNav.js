import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';

import Home from './Home'
import Account from './Account';
import EditAccount from './EditAccount';

const Drawer = createDrawerNavigator();

class drawNav extends Component {

  render(){
    return (


      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Account" component={Account}/>
        <Drawer.Screen name="Edit Account" component={EditAccount}/>
      </Drawer.Navigator>


         
    );
    
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
       justifyContent: 'center',
       backgroundColor: '#ffc0cb',
       paddingLeft: 60,
       paddingRight: 60,
  }
});


export default drawNav