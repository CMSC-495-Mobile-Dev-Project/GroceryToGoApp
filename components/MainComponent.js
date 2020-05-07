import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image, SafeAreaView, Alert, ToastAndroid } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Coupon from './CouponComponent';
import Cart from './CartComponent';
import { Icon } from 'react-native-elements'
import Help from "./HelpComponent";
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Checkout from './CheckoutComponent';

console.disableYellowBox = true;

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={styles.drawerHeaderText}>Grocery To Go</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }

    },
    {

        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#249924',
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />,
        })
    }
);
const AboutUsNavigator = createStackNavigator(
    {
        AboutUs: { screen: AboutUs }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#249924'
            },
            headerLeft: <Icon
                name='info'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const CouponNavigator = createStackNavigator(
    {
        Coupon: { screen: Coupon }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#249924',
            },
            headerLeft: <Icon
                name='gift'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const CartNavigator = createStackNavigator(
    {
        Cart: {
            screen: Cart,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        Checkout: { screen: Checkout,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#249924'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

// const CartNavigator = createStackNavigator(
//     {
//         Cart: { screen: Cart }
//     },
//     {
//         navigationOptions: ({ navigation }) => ({
//             headerStyle: {
//                 backgroundColor: '#249924',
//             },
//             headerLeft: <Icon
//                 name='cart-arrow-down'
//                 type='font-awesome'
//                 iconStyle={styles.stackIcon}
//                 onPress={() => navigation.toggleDrawer()}
//             />
//         })
//     }
// );
const HelpNavigator = createStackNavigator(
    {
        Help: { screen: Help }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#249924',

            },
            headerLeft: <Icon
                name='question-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
const LoginNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginForm,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        Signup: { screen: SignupForm}
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#249924'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

// const SignupNavigator = createStackNavigator(
//     {
//         SignUp: { screen: SignupForm }
//     },
//     {
//         navigationOptions: ({ navigation }) => ({
//             headerStyle: {
//                 backgroundColor: '#249924',
//             },
//             headerLeft: <Icon
//                 name='bars'
//                 type='font-awesome'
//                 iconStyle={styles.stackIcon}
//                 onPress={() => navigation.toggleDrawer()}
//             />
//         })
//     }
// );
const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={28}
                        color='#008000'
                    />
                )
            }
        },
        AboutUs: {
            screen: AboutUsNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='info'
                        type='grin-hearts'
                        size={28}
                        color='#008000'
                    />
                )
            }
        },
        Coupon: {
            screen: CouponNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='gift'
                        type='font-awesome'
                        size={28}
                        color='#008000'
                    />
                )
            }
        },
        Cart: {
            screen: CartNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='cart-arrow-down'
                        type='font-awesome'
                        size={28}
                        color='#008000'
                    />
                )
            }
        },
        Help: {
            screen: HelpNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='question-circle'
                        type='font-awesome'
                        size={28}
                        color='#008000'
                    />
                )
            }
        },
        Coupon: {
            screen: CouponNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='gift'
                        type='font-awesome'
                        size={28}
                        color='#008000'
                    />
                )
            }
        },
        Logout: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='sign-out'
                        type='font-awesome'
                        size={28}
                        color='#008000'
                    />
                )
            }
        },
    },
    {
        initialRouteName: 'Logout',
        drawerBackgroundColor: '#e1f7d5',
        contentComponent: CustomDrawerContentComponent
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#fff',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 4,
        flexDirection: 'row',
        fontWeight: 'bold'
    },
    drawerHeaderText: {
        color: '#028900',
        fontSize: 24,
        fontWeight: '900',
        //fontFamily: "Cochin"
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#FFFFFF',
        fontSize: 28
    }
});
export default Main;
