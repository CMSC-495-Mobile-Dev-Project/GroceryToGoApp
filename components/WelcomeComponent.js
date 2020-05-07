import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Welcome extends Component {

    static navigationOptions = {
        title: 'Welcome'
    }

    render() {
        return (
            <View>
                <Text>Welcome Component</Text>
            </View>
        );
    }
}

export default Welcome;