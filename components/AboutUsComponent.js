import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Platform, ListView, TouchableOpacity, TouchableHighlight } from 'react-native';

class AboutUs extends Component {
  static navigationOptions = {
    title: 'About Us'
}

    render() {
      return (
        <View style={styles.container}>
          <Image style={styles.icon} source={require('../assets/logosmall.png')} />
          <Text style={styles.title}>About Us </Text>
          <Text style={styles.description}>Team Members: Kaneka Ky, Rachael Harner, Angel Vazquez, Marilyn McDonald</Text>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress= {() => this.props.navigation.navigate("Home")}>
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
      width:320,
      height:200,
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

export default AboutUs;