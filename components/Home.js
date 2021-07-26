import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Header from './Header';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      location_name: '',
    }
  }


  getLocation = async () => {
    const token = await AsyncStorage.getItem('@session_token');
    return fetch("http://10.0.2.2:3333/api/1.0.0/find" , {
      'headers': {
        'Content-type': 'application/json',
        'X-Authorization': token
      }
    })
  }



  render(){


    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>  
      <Header />
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
       backgroundColor: '#ffc0cb'
  },

  Button:{
    
    padding: 30,
    fontSize: 20,
    textDecorationLine: 'underline'

  }

});
   




export default Home