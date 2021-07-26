import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Header from './Header';

class Home extends Component {

  
  render(){

    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>  
      <Header />
      <Text>hello</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Account')} >
        <Text style={styles.Button}>My Account</Text>
      </TouchableOpacity>
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