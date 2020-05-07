import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, ImageBackground, Button} from 'react-native';

const userInfo = {username: 'admin', password: 'password'}

class LoginForm extends Component  {  

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render(){

        return(
            <ImageBackground source={require('../pages/assets/backgroundlogin.png')}
                            style={styles.container}>
                <Text style={styles.logo}> Grocery To Go</Text>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="rgba(255, 255, 255, 0.9)"
                        style={styles.input}
                        onChangeText={(username)=>this.setState({username})}
                        value={this.state.username}
                        />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.9)"
                        secureTextEntry 
                        style={styles.input}
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}
                        />
                    
                    <TouchableOpacity 
                        onPress={this._login}
                        // onPress={() => this.props.navigation.navigate("Home")}
                        style={styles.loginBtn} >
                            <Text style={styles.loginText}>LOG IN</Text>
                        
                   </TouchableOpacity>
                 
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                            <Text style={styles.signupButton}>  Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    _login = async() => {
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            // alert('Logged In');
            this.props.navigation.navigate("Home")
        } else {
            alert('Username or Password is Incorrect.')
        }
            

    }
    
}

const styles = StyleSheet.create({
    container: {
        // padding: 10
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 550,
        flexDirection: 'row'
    },
    signupText: {
        color:'rgba(255, 255, 255, 0.7)',
        fontSize: 14
    },
    signupButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '500'
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 25,
        marginTop: 10,
        color: '#FFF',
        paddingHorizontal: 10 
    },
    logo:{
        fontWeight:"bold",
        fontSize:40,
        color:"#fff",
        justifyContent: 'center',
        marginTop:400,
        marginBottom: 100
      },
      loginBtn:{
        width:300,
        backgroundColor:"#249924",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
      },
      loginText:{
        fontWeight: '900',
        color:"white"
        
      }
})

export default LoginForm;