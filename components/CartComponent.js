import React, { Component } from 'react';
import { Image, ScrollView, FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Checkout from './CheckoutComponent';

var {height} = Dimensions.get('window');

class Cart extends Component {

    static navigationOptions = {
        title: 'Cart'
    }
    
    constructor(props) {
        super(props);
        this.state = {
          modalVisible:false,
          userSelected:[],
          data: [
            {id:1,  name: "Eggs", quantity: 49, price: 1.00, image:"https://www.incnow.com/wp-content/uploads/2013/03/egg-carton.jpg",    },
            {id:2,  name: "Milk", quantity: 1, price: 1.50, image:"https://shepherdminiatures.com/wp-content/uploads/2018/02/milk-red-small-copy.jpg",      },
            {id:3,  name: "Bread", quantity: 1, price: 1.62, image:"https://americacomesalive.com/i/Wonder-bread.png", } ,
            {id:4,  name: "Cheese", quantity: 1, price: 3.5, image:"http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png",    } ,
            {id:5,  name: "Potatoes", quantity: 1, price: 2.5, image:"https://www.agric.wa.gov.au/sites/gateway/files/W07_0018_White_star_potato.JPG",    },             
            {id:6,  name: "Cheeese", quantity: 1, price: 3.5, image:"http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png",    } 
          ]
        };
    }
    clickEventListener = (item) => {
        Alert.alert('Adjust Quantities', 'Item: '+ item.name, 
        [{text: '+1', onPress: () => this.check_quantities_adding(item)},        
        {text: '-1', onPress: () => this.check_quantities_subtracting(item)},
        {text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel'}
        ], 
        {cancelable: true});
    }

    check_quantities_adding=(item)=>{
      console.log(item.name + item.quantity);
      if( item.quantity > 0 && item.quantity < 50){   
        this.setState({[item.quantity]: item.quantity++});
      }
      else if (item.quantity == 50) {
        Alert.alert("Sorry, you've reached the maximum limit of 50.")
        console.log(item.quantity);
      }   
    }

    check_quantities_subtracting=(item)=>{      
      if(item.quantity == 1) {   
        Alert.alert("Item removed from cart.")
        //this.splice(id, item.id);
        {this.state.data.map(item => (
          <li key={item}>{item}</li>
        ))}
        this.onRemoveItem(item.id);        
        //console.log(this.state.data.indexOf); 
        //console.log(this.state.data);       
      }
      else if (item.quantity > 1) {
        this.setState({[item.quantity]: item.quantity--});
      }       
      //console.log(item.name + item.quantity);
    }
    onRemoveItem = id => {
      this.setState(state => {
        const data = state.data.filter(item => item.id !== id);
        console.log(data);
        return {
          data,
        };
      });
    };
    calculateTotal=() => {
      var total = 0;
      var cartArray = this.state.data;
      var index = 0;
      for (index = 0; index < cartArray.length; index++) {
        total += (cartArray[index].quantity * cartArray[index].price);
      }
      return total.toFixed(2);
    }
    calculateItemTotal=(item) => {
      var itemTotal = item.quantity * item.price;
      return itemTotal.toFixed(2);
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                style={styles.scrollStyle}
                columnWrapperStyle={styles.listContainer}
                data={this.state.data}
                keyExtractor= {(item) => {
                    return item.id;
                }}
                renderItem={({item}) => {
                return (
                    <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                    <Image style={styles.image} source={{uri: item.image}}/>
                    <View style={styles.cardContent}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.count}>${this.calculateItemTotal(item)}</Text>                        
                        <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                        <Text style={styles.followButtonText}>Quantity: {item.quantity}</Text>  
                        </TouchableOpacity>                        
                    </View>
                    </TouchableOpacity>
                )}}/>                        
                <View style={styles.flatStyle}>
                    <Text></Text>                    
                    <Text>  Total: ${this.calculateTotal()}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={() => this.props.navigation.navigate("Checkout")}>
                    <Text style = {styles.followButtonText}>
                    Check Out
                    </Text>
                    </TouchableOpacity>
                </View>
             </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', 
        height: height,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    scrollStyle: {
        width: 600,
        backgroundColor: 'white'
    },    
    flatStyle: {
        textAlign: 'center',
        width: 120,
        backgroundColor: 'white'
    },
    contentList:{
        flex:1,
      },
      cardContent: {
        marginLeft:20,
        marginTop:10
      },
      image:{
        width:90,
        height:90,
        borderRadius:45,
        borderWidth:2,
        borderColor:"#ebf0f7"
      },
    
      card:{
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    
        marginLeft: 20,
        marginRight: 20,
        marginTop:20,
        backgroundColor:"white",
        padding: 10,
        flexDirection:'row',
        borderRadius:30,
      },
    
      name:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#3399ff",
        fontWeight:'bold'
      },
      count:{
        fontSize:14,
        flex:1,
        alignSelf:'center',
        color:"#6666ff"
      },
      followButton: {
        marginTop:10,
        height:35,
        width:100,
        padding:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"gray",
      },
      followButtonText:{
        color: "blue",
        fontSize:12,
      }
})

export default Cart;