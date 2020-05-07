import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, ImageBackground} from 'react-native';

import SignupButton from '../components/SignupButton';

const SignupForm = () => {

    return(
        <ImageBackground source={require('../assets/background.png')}
                            style={styles.container}>
            <Text style={styles.logo}> Grocery To Go</Text>
                <View style={styles.container}></View>
            <View style={styles.container}>            
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255, 255, 255, 0.9)"
                    style={styles.input}
                    />
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255, 255, 255, 0.9)"
                    style={styles.input}
                    />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255, 255, 255, 0.9)"
                    secureTextEntry 
                    style={styles.input}
                    />
                <SignupButton />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 10
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 25,
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
        
    },
    logo:{
        fontWeight:"bold",
        fontFamily: 'sans-serif-light',
        fontSize:40,
        color:"#fff",
        justifyContent: 'center',
        marginTop:300,
        marginBottom: 50
      }

})

export default SignupForm;