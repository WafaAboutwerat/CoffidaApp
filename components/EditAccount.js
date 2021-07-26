import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

import Header from './Header';

class EditAccount extends Component {
  render(){
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
   




export default EditAccount