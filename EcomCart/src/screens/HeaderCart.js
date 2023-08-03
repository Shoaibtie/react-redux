import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HeaderCart = () => {
    const navigation = useNavigation();
    const cartItems = useSelector(state => state.cartItems)

    return (
        <View>
            {cartItems.length !== 0 ?
                  <TouchableOpacity onPress={() => navigation.navigate('CartList')}>
                <View style={{
                     width: 30, height:40
                    ,justifyContent:'center',alignItems:'center',marginBottom:10
                }}>
                    <View style={{ position: 'absolute',
                      }}>
                         <Image
                        resizeMode="cover"
                        style={{ height: 25, width: 25, }}
                        source={require('../assets/shopping-cart.png')} />
                        <View style={{
                            backgroundColor: 'red',
                            height: 20, width: 20, borderRadius: 20 / 2,marginTop:-35,marginLeft:-10
                        }}>
                            <Text style={{ marginLeft: 5, fontSize: 15,
                                 fontWeight: 'bold', color: 'white' }}>{cartItems.length}</Text>
                        </View>
                       

                    </View>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('CartList')}
                    style={{marginLeft:10}}
                    >
                        <View style={{
                            backgroundColor: 'red',
                            height: 20, width: 20, borderRadius: 20 / 2
                        }}>
                            <Text style={{ marginLeft: 5, fontSize: 15,
                                 fontWeight: 'bold', color: 'white' }}>{cartItems.length}</Text>
                        </View>
                    </TouchableOpacity>
                    <Image
                        resizeMode="cover"
                        style={{ height: 25, width: 25 }}
                        source={require('../assets/shopping-cart.png')} /> */}

                </View>
                </TouchableOpacity>

                : null}
        </View>
    )
}

export default HeaderCart;