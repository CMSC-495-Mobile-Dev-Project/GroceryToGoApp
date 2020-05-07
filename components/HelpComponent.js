import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Card, Button, Platform, ListView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements'


class Help extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/support.jpg')} />
        <TouchableOpacity style={[styles.callButton]}>
          <Icon
            raised
            name='mobile'
            type='font-awesome'
            color='#006400'
          />
          <Text style={[styles.callText]}>(800)23432434</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.emailButton]}>
          <Icon
            raised
            name='envelope'
            type='font-awesome'
            color='#006400'
          />
          <Text style={[styles.emailText]}>Groce@gtg.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.myButtonContainer, styles.myloginButton]}>
          <Text style={[styles.myText]}>Follow Us:</Text>
          <Icon
            raised
            name='facebook-official'
            type='font-awesome'
            color='#3b5998'
          />
          <Icon
            raised
            name='twitter-square'
            type='font-awesome'
            color='#38A1F3'
          />
          <Icon
            raised
            name='instagram'
            type='font-awesome'
            color=' #F56040'
          />
        </TouchableOpacity>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("Home")}>
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
    paddingTop: 50,
  },
  icon: {
    width: 400,
    height: 450,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    color: "#5F6D7A"
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#249924",
  },
  myButtonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  myText:{
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  callButton: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 250,
    borderRadius: 30,
    justifyContent: 'center'
    
  },
  callText:{
    fontWeight: 'bold',
    fontSize: 15,
    
  },
  emailButton: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 250,
    borderRadius: 30,
    justifyContent: 'center'
    
  },
  emailText:{
    fontWeight: 'bold',
    fontSize: 15,
  },
});


export default Help;