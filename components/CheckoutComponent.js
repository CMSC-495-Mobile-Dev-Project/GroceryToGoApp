import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Dimensions, TextInput, Button,TouchableHighlight } from 'react-native';

var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window');

class Checkout extends Component {

    static navigationOptions = {
        title: 'Checkout'
    }
    constructor(props) {
      super(props);
      this.state = {
        TextInputName: '',
        TextInputEmail: '',
        TextInputCCNumber: '',
        TextInputExpDate: '',
        TextInputCCV: '',
        TextInputZIP: ''
      };
    }
    //Handler for the Submit onPress
    CheckTextInput = () => {      
      //Check for the Name TextInput
      if (this.state.TextInputName != '') {        
        //Check for the Email TextInput
        if (this.state.TextInputEmail != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.TextInputEmail)) {                    
          //Check for valid CC number
          if (this.state.TextInputCCNumber != '' && !isNaN(this.state.TextInputCCNumber) && this.state.TextInputCCNumber.toString().length == 16) {
            //Check for valid expiration date
            if (this.state.TextInputExpDate != '' && /^(0[1-9]|1[0-2])\/\d{2}$/.test(this.state.TextInputExpDate)) {
              //Check for valid CCV
              if (this.state.TextInputCCV != '' && !isNaN(this.state.TextInputCCV) && this.state.TextInputCCV.toString().length == 3)
                //Check for valid billing zip code
                if (this.state.TextInputZIP != '' && !isNaN(this.state.TextInputZIP) && this.state.TextInputZIP.toString().length == 5) {
                  alert('success')                  
                  Alert.alert('Order confirmation', 'Success! A receipt has been emailed to ' + this.state.TextInputEmail, 
                    [{text: 'OK', onPress: () => this.props.navigation.navigate('Home')}]); 
                  console.log(this.state.TextInputEmail)
                }
                else {
                  alert('Please enter a valid zip code.')
                }
            }
            else {
              alert('Please enter a valid expiration date.')
            }
          }
          else {
            alert('Please enter valid credit card number.')
          }
        } else {
          alert('Please enter a valid email address.');
        }
      } else {
        alert('Please enter the cardholder name.');
      }
    };
    render() {
      return (

        <View style={styles.MainContainer}>
         <Text style={[styles.baseText]}> Please Enter Your payment Information: </Text>
          <TextInput
            placeholder="Cardholder Name"
            placeholderTextColor="gray"
            onChangeText={TextInputName => this.setState({ TextInputName })}
            underlineColorAndroid="transparent"
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
            underlineColorAndroid="transparent"
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Credit card number"
            placeholderTextColor="gray"
            onChangeText={TextInputCCNumber => this.setState({ TextInputCCNumber })}
            underlineColorAndroid="transparent"
            secureTextEntry
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Expiration date"
            placeholderTextColor="gray"
            onChangeText={TextInputExpDate => this.setState({ TextInputExpDate })}
            underlineColorAndroid="transparent"
            secureTextEntry
            style={styles.TextInput}
          />
          <TextInput
            placeholder="CCV"
            placeholderTextColor="gray"
            onChangeText={TextInputCCV => this.setState({ TextInputCCV })}
            underlineColorAndroid="transparent"
            secureTextEntry
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Billing ZIP code"
            placeholderTextColor="gray"
            onChangeText={TextInputZIP => this.setState({ TextInputZIP })}
            underlineColorAndroid="transparent"
            style={styles.TextInput}
          />
          <View  style={styles.SubmitContainer}>
           <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => Alert.alert('Thank you for your payment')}>
           <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
        </View>
        </View>
      );
    }
    
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
    alignItems:"center",
    justifyContent:"center",
    fontWeight:"bold"
  },
  SubmitContainer:{
    alignItems:"center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    width: 200,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#249924",
    alignItems:"center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    alignItems:"center"
  },
  MainContainer: {
    flex: 1,
    margin: 35,
    
  },
  
  TextInput: {
    height: 45,
    backgroundColor: 'rgb(144,238,144)',
    borderRadius: 25,
    marginTop: 10,
    color: 'black',
    padding: 10,
    marginLeft: 10,
    marginRight:10
  },

  button:{
    backgroundColor:"#249924",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  },
});

export default Checkout;