import React, { useState } from 'react';
import { Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Provider as StoreProvider } from 'react-redux'
import store from '../redux/store'

import HomeScreen from './HomeScreen';
import Testing from '../extra/Testing';
import SearchScreen from './SearchScreen';
import FixedProps from './FixedProps';
import Mymenu from './Mymenu';
import Credit from './Credit';
import GameZone from './GameZone';
import Product from './Product';
import ProductDetails from './ProductDetails.js';

import CartList from './CartList';
import Checkout from './Checkout';
import Success from './Success';
import HeaderCart from './HeaderCart';
import SuperCoin from './SuperCoin';

const Navigation = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createMaterialBottomTabNavigator();
    


    function MyTabs() {
        return (
            <Tab.Navigator
                activeColor="#2874f0"
                inactiveColor="#b8b6b6"
                barStyle={{ backgroundColor: '#fff' }}
            >
                <Tab.Screen name="HomeScreen" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Shop',

                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={focused ? require('../assets/active-store.png') : require('../assets/store.png')}
                                style={{ height: 25, width: 25 }}
                            />



                        ),
                    }}
                />
                <Tab.Screen name="SuperCoin" component={SuperCoin}
                    options={{
                        tabBarLabel: 'SuperCoin',

                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={focused ? require('../assets/active-power.png') : require('../assets/power.png')}
                                style={{ height: 25, width: 25 }}
                            />



                        ),
                    }}
                />
                <Tab.Screen name="Mymenu" component={Mymenu}
                    options={{
                        tabBarLabel: false,

                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={focused ? require('../assets/active-dots-menu.png') : require('../assets/dots-menu.png')}
                                style={{ height: 25, width: 25 }}
                            />



                        ),
                    }}
                />
                <Tab.Screen name="Credit" component={Credit}
                    options={{
                        tabBarLabel: 'Credit',

                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={focused ? require('../assets/active-rupee-symbol.png') : require('../assets/rupee-symbol.png')}
                                style={{ height: 25, width: 25 }}
                            />



                        ),
                    }}
                />

                <Tab.Screen name="GameZone" component={GameZone}
                    options={{
                        tabBarLabel: 'GameZone',

                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={focused ? require('../assets/active-games.png') : require('../assets/games.png')}
                                style={{ height: 25, width: 25 }}
                            />



                        ),
                    }}
                />

            </Tab.Navigator>
        )
    }

    return (
        <StoreProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{
                        // headerStyle: {
                        //     backgroundColor: '#2874f0',
                        // },
                        headerShown: false
                        //headerTitle: (props) => <LogoTitle {...props} />
                    }}
                />

                <Stack.Screen name="Testing" component={Testing} />
                <Stack.Screen name="Product" component={Product} 
                  options={{
                         headerStyle: {
                            backgroundColor: '#2874f0',
                        },
                        headerTintColor: '#fff',
                  }}
                />
                <Stack.Screen name="ProductDetails" component={ProductDetails}
                options={{
                    headerStyle: {
                       backgroundColor: '#2874f0',
                   },
                   headerRight:() => (
                    <HeaderCart/>
                  ),
                   headerTintColor: '#fff',
             }}
                />
                <Stack.Screen name="CartList" component={CartList}
                options={{
                    headerTitle:'Cart',
                    headerStyle: {
                       backgroundColor: '#2874f0',
                   },
                   headerTintColor: '#fff',
             }}
                />
                <Stack.Screen name="Checkout" component={Checkout}
                options={{
                    headerTitle:'Cart',
                    headerStyle: {
                       backgroundColor: '#2874f0',
                   },
                   headerTintColor: '#fff',
             }}
                />
                <Stack.Screen name="FixedProps" component={FixedProps} />
                <Stack.Screen name="Success" component={Success} options={{headerShown:false}}/>
                <Stack.Screen name="SearchScreen" component={SearchScreen}
                    options={{ headerShown: false }}

                />
            </Stack.Navigator>
        </NavigationContainer>
        </StoreProvider>
    )
}
export default Navigation;
