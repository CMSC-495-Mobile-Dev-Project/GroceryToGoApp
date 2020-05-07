import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Shop extends Component {

    static navigationOptions = {
        title: 'Shop'
    }
    render() {
        return (
            <View>
                <Text>Shop Component</Text>
            </View>
        );
    }
}

export default Shop;