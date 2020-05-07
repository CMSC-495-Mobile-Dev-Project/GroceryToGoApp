import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const ContactUsButton = () => {

    return(
        <TouchableOpacity>
          <Text style={styles.contactUs}>Contact Us</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contactUs:{
        color:"white",
        fontSize:14,
        marginTop: 150,
        marginBottom:-0
      },
})

export default ContactUsButton;