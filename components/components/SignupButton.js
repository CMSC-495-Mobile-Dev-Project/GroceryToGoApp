import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SignupButton = () => {

    return(
      <View>
        <TouchableOpacity
          onPress={() => alert("Registration Complete!")} 
          style={styles.signupBtn}
        >
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    signupBtn:{
        width:300,
        backgroundColor:"#249924",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:500
      },
      signupText:{
        color:"white"
      }
})

export default SignupButton;