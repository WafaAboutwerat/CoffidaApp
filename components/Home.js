import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Header from './Header';

const Drawer = createDrawerNavigator();
class Home extends Component {

  
  render(){

    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>  
      <Header />
      <Text>hello</Text>

      </View>
    )
  };
}

const styles = StyleSheet.create({

  container: {
       flex: 1,
  },

});
   




export default Home