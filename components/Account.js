import React, { Component } from 'react';
import { StyleSheet,Text } from 'react-native';

import Header from './Header';

class Account extends Component {
  render(){
    return (
      <View>
        <Header />
      <Text>hello</Text>
      </View>
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
   




export default Account