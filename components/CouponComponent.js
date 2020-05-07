import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Alert, ScrollView } from 'react-native';

class Coupon extends Component {
    static navigationOptions = {
        title: 'Coupon'
    }

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            data: [
                { id: 1, name: "Eggs", price: 1.00, image: "https://www.incnow.com/wp-content/uploads/2013/03/egg-carton.jpg" },
                { id: 2, name: "Milk", price: 1.50, image: "https://shepherdminiatures.com/wp-content/uploads/2018/02/milk-red-small-copy.jpg" },
                { id: 3, name: "Bread", price: 1.62, image: "https://americacomesalive.com/i/Wonder-bread.png" },
                { id: 4, name: "Cheese", price: 3.50, image: "http://www.diningchicago.com/blog/wp-content/uploads/2012/10/Kraft-cheese.png" },
                { id: 5, name: "Potatoes", price: 2.50, image: "https://www.agric.wa.gov.au/sites/gateway/files/W07_0018_White_star_potato.JPG" },

            ]
        };
    }

    clickEventListener = (item) => {
        Alert.alert('Add Coupon for', 'Item: ' + item.name, [{ text: 'Add Coupon', onPress: () => this.check_item_present(item) },
            { text: 'Cancel', onPress: () => console.log('cancelled'), style: 'cancel' }
        ], { cancelable: true });
    }

    check_item_present = (item) => {
        console.log(item.name + item.quantity);
        if (item.quantity > 1) {} else if (item.quantity == 0) {
            Alert.alert("Item is not in the Cart")
            console.log(item.quantity);
        }
    }
    check_item_present = (item) => {
        console.log(item.name + item.coupon);
        if (item.coupon = true) {} else if (item.coupon = false) {
            Alert.alert("Item is not in the Cart")
            console.log(item.coupon);
        }
    }

    calculateTotal = () => {
        var total = 0;
        var couponArray = this.state.data;
        var index = 0;
        for (index = 0; index < couponArray.length; index++) {
            total += (couponArray[index].quantity * couponArray[index].price);
        }
        return total.toFixed(2);
    }
    calculateItemTotal = (item) => {
        var itemTotal = item.coupon - item.price;
        return itemTotal.toFixed(2);
    }

    render() {
        return (
            <View style = { styles.container }>
            <FlatList style = { styles.contentList }
            columnWrapperStyle = { styles.listContainer }
            data = { this.state.data }
            keyExtractor = {
                (item) => {
                    return item.id;
                }
            }
            renderItem = {
                ({item}) => {
                    return ( 
                    <TouchableOpacity style = {styles.card} onPress = {() => { this.clickEventListener(item) }}>
                        <Image style = { styles.image }
                        source = {
                            { uri: item.image } }/> 
                        <View style = { styles.cardContent }>
                          <Text style = { styles.name }> { item.name }</Text>
                          <Text style = { styles.price }> ${ item.price.toFixed(2) } </Text>
                          <TouchableOpacity style = { styles.followButton }
                            onPress = {() => this.clickEventListener(item) }>
                            <Text style = { styles.followButtonText } > Add Coupon { item.coupon }</Text>                                                
                          </TouchableOpacity>                        
                        </View>                    
                      </TouchableOpacity>                                            
                    )}}/>            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#ebf0f7"
    },
    contentList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: "#ebf0f7"
    },

    card: {
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
        marginTop: 20,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#3399ff",
        fontWeight: 'bold'
    },
    price: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#6666ff"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#249924",
        borderWidth: 1,
        borderColor: "#249924",
    },
    followButtonText: {
        color: "white",
        fontSize: 12,
    },
});



export default Coupon;



