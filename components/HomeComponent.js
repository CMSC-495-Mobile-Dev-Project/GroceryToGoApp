import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Cart extends React.Component {
	static navigationOptions = {
        title: 'Home'
    }
    
	constructor(props) {
		super(props);
		this.state = {
			selectAll: false,
			cartItemsIsLoading: false,
			cartItems: [

				{ itemId: "501436323", name: "Kiwi", thumbnailImage: "https://images2.alphacoders.com/224/thumb-1920-22482.jpg", weight: "Red", qty: 1, salePrice: "5", checked: 1 },
				{ itemId: "35031861", name: "Orange", thumbnailImage: "https://mk0citrus4iqeh7tvu64.kinstacdn.com/wp-content/uploads/2018/08/Washington-Navel-Orange-Tree-04-100x100.jpg", qty: 1, weight: "Green", salePrice: "2", checked: 0 },
				{ itemId: "801099131", name: "Apple", thumbnailImage: "https://www.aussieapples.com.au/wp-content/uploads/2017/06/kanzi-apple-100x100.png", qty: 1, weight: "Blue", salePrice: "1.99", checked: 1 },
				{ itemId: "501436323", name: "Banana", thumbnailImage: "https://mivestan.com/image/cache/catalog/Mive/moz/FreeGreatPicture.com-27066-banana-200x200.jpg", weight: "Red", qty: 1, salePrice: "5", checked: 1 },
				{ itemId: "35031861", name: "Peach", thumbnailImage: "https://paradisenursery.com/wp-content/uploads/2014/04/Donut-Peaches-scaled.jpg", qty: 1, weight: "Green", salePrice: "2", checked: 0 },
				{ itemId: "801099131", name: "Strawberry", thumbnailImage: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000x2000fit/7/5/6/108756_strawberry.jpg", qty: 1, weight: "Blue", salePrice: "1.99", checked: 1 },

			]
		}
	}

	selectHandler = (index, value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value 
		this.setState({ cartItems: newItems }); // set new state
	}

	selectHandlerAll = (value) => {
		const newItems = [...this.state.cartItems];
		newItems.map((item, index) => {
			newItems[index]['checked'] = value == true ? 0 : 1;
		});
		this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); // set new state
	}

	deleteHandler = (index) => {
		Alert.alert(
			'Are you sure you want to delete this item from your cart?',
			'',
			[
				{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
				{
					text: 'Delete', onPress: () => {
						let updatedCart = this.state.cartItems; /* Clone it first */
						updatedCart.splice(index, 1); /* Remove item from the cloned cart state */
						this.setState(updatedCart); /* Update the state */
					}
				},
			],
			{ cancelable: false }
		);
	}

	quantityHandler = (action, index) => {
		const newItems = [...this.state.cartItems]; // clone the array 

		let currentQty = newItems[index]['qty'];

		if (action == 'more') {
			newItems[index]['qty'] = currentQty + 1;
		} else if (action == 'less') {
			newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
		}

		this.setState({ cartItems: newItems }); // set new state
	}

	subtotalPrice = () => {
		const { cartItems } = this.state;
		if (cartItems) {
			return cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.qty * 1 : 0), 0);
		}
		return 0;
	}



	render() {
		const styles = StyleSheet.create({
			centerElement: { justifyContent: 'center', alignItems: 'center' },
		});

		const { cartItems, cartItemsIsLoading, selectAll } = this.state;

		return (
			<View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
				<View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10 }}>
					<View style={[styles.centerElement, { width: 50, height: 50 }]}>

					</View>
					<View style={[styles.centerElement, { height: 50 }]}>
						<Text style={{ fontSize: 18, color: '#000' }}> Hello! What are you looking for? </Text>
					</View>
				</View>


				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, { height: 300 }]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
						<ScrollView>
							{cartItems && cartItems.map((item, i) => (
								<View key={i} style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120 }}>
									<View style={[styles.centerElement, { width: 60 }]}>
										<TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.selectHandler(i, item.checked)}>
											<Ionicons name={item.checked == 1 ? "ios-cart" : "ios-cart"} size={25} color={item.checked == 1 ? "#0faf9a" : "#aaaaaa"} />
										</TouchableOpacity>
									</View>
									<View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
										<TouchableOpacity onPress={() => {/*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/ }} style={{ paddingRight: 10 }}>
											<Image source={{ uri: item.thumbnailImage }} style={[styles.centerElement, { height: 60, width: 60, backgroundColor: '#eeeeee' }]} />
										</TouchableOpacity>
										<View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
											<Text numberOfLines={1} style={{ fontSize: 15 }}>{item.name}</Text>
											<Text numberOfLines={1} style={{ color: '#8f8f8f' }}>{item.color ? 'Averag price: ' + item.weight : ''}</Text>
											<Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10 }}>${item.qty * item.salePrice}</Text>
											<View style={{ flexDirection: 'row' }}>
												<TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
													<MaterialIcons name="remove" size={22} color="#cccccc" />
												</TouchableOpacity>
												<Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
												<TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
													<MaterialIcons name="add" size={22} color="#cccccc" />
												</TouchableOpacity>
											</View>
										</View>

									</View>
									<View style={[styles.centerElement, { width: 60 }]}>
										{/* <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.deleteHandler(i)}>
										<Ionicons name="cart" size={25} color="#ee4d2d" />
									</TouchableOpacity> */}
									</View>
								</View>
							))}
						</ScrollView>
					)}

				{!cartItemsIsLoading &&
					<View style={{ backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5 }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={[styles.centerElement, { width: 60 }]}>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={[styles.centerElement, { width: 60 }]}>
								<TouchableOpacity style={[styles.centerElement, { width: 32, height: 32 }]} onPress={() => this.selectHandlerAll(selectAll)}>
									<Ionicons name={selectAll == true ? "ios-cart" : "ios-cart"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} />
								</TouchableOpacity>
							</View>
							<View style={{ flexDirection: 'row', flexGrow: 2, flexShrink: 3, justifyContent: 'space-between', alignItems: 'center' }}>
			
								<View style={{ flexDirection: 'row', paddingRight: 20, alignItems: 'center' }}>
									<Text style={{ color: '#8f8f8f' }}>Items in Cart: </Text>
									<Text>{this.subtotalPrice()}</Text>
								</View>
							</View>
						</View>
					</View>
				}
			</View>
		);
	}
}