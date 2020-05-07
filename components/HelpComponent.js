import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Platform, ListView, TouchableOpacity, TouchableHighlight } from 'react-native';

class Help extends Component {
    
    render() {
      return (
        <View style={styles.container}>
          <Image style={styles.icon} source={require('../assets/support.jpg')} />
          <Text style={styles.title}>Help and Support </Text>
          <Text style={styles.description}>Bla Bla Bla</Text>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.clickListener('login')}>
            <Text style={styles.buttonText}>Return to Shopping</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop:50,
    },
    icon:{
      width:400,
      height:450,
    },
    title:{
      fontSize:24,
      textAlign: 'center',
      marginTop:22,
      color: "#5F6D7A"
    },
    description: {
      marginTop:20,
      textAlign: 'center',
      color: "#A9A9A9",
      fontSize:16,
      margin:40,
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#249924",
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize:20,
    }
  });


export default Help;