import React, { Component } from 'react';
import { StyleSheet , ToastAndroid ,TouchableOpacity,View,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';


class Header extends Component {

  logOut = async () => {
    let token = await AsyncStorage.getItem('@session_token');
    await AsyncStorage.removeItem('@session_token');
    return fetch("http://10.0.2.2:3333/api/1.0.0/user/logout", {
      method: 'post',
      headers: {
        "X-Authorization": token
      }
    })
    .then((response) => {
      if(response.status === 200){
        this.props.navigation.navigate("login");
      } else if(response.status === 401){
        throw 'Unauthorised'
      } else if(response.status === 500){
        throw 'server error'
      }
    })
    .catch((error) => {
      console.log(error);
      ToastAndroid.show(error, ToastAndroid.SHORT);
    })
  }

  render(){
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => this.logOut()}>
          <Text style={styles.btntext}>logout</Text>
        </TouchableOpacity>

        <Text style={styles.appName}>Coffee Shops</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({

  header: {
       width: '100%',
       height: '15%',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#db7093',
       
  },

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 280
  },

  btntext:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22
  },


 appName:{
     color: 'white',
     fontSize: 30,
     
 }

});




export default Header