import React,{useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const LogoTitle = () => {
    const navigation = useNavigation();

  const cartItems = useSelector(state => state.cartItems)

//    const [countCart,setCart] =useState(null);    
    return (
        <View style={{ width: '109%', height: 120,backgroundColor:'#2874f0' }}>
            <View style={{ flexDirection: 'row', height: 40 }}>
                <View style={{ flexDirection: 'row', width: '30%', height: 40 }}>
                    <Image
                        resizeMode="cover"
                        style={{ height: 20, width: 90, marginTop: 15, marginLeft: 12 }}
                        source={require('../assets/logo.png')} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '70%',
                    height: 50,
                    marginLeft:100,
                    width:170,
                    justifyContent:'space-around'
                    

                }}>
                    
                    
                    <Image
                        resizeMode="cover"
                        style={{ height: 23, width: 23, marginTop: 19}}
                        source={require('../assets/notification.png')} />
                        {/* { cartItems.length !== 0  ?
                    <TouchableOpacity onPress={()=>navigation.navigate('CartList')}>
                    <View style={{backgroundColor:'white',height: 20, width: 20,borderRadius:20/2,marginTop:7}}>
                <Text style={{marginLeft:5}}>{cartItems.length}</Text>
                    </View> 
                    </TouchableOpacity>
                    :null} */}
                    <View style={{position:'absolute',alignItems:'center'}}>
                    <Image
                        resizeMode="cover"
                        style={{ height: 25, width: 25, marginTop: 19, marginLeft: 45 }}
                        source={require('../assets/shopping-cart.png')} />
                     
                     { cartItems.length !== 0  ?
                    <TouchableOpacity onPress={()=>navigation.navigate('CartList')}>
                    <View style={{backgroundColor:'red',height: 20, width: 20,
                    borderRadius:20/2,marginTop:-35,marginLeft:13}}>
                <Text style={{ marginLeft: 5, fontSize: 15,
                                 fontWeight: 'bold', color: 'white' }}>{cartItems.length}</Text>
                    </View> 
                    </TouchableOpacity>
                    :null}

                        </View>
                    <Text style={{ color: 'white', marginTop: 17, marginLeft: 20, fontSize: 16 }}>
                        Log in</Text>
                        
                </View>

            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 20, marginTop: -5 }}>
                <Text style={{ color: 'white' }}>Explore </Text>
                <Text style={{ color: '#f7c859' }}>Plus</Text>
                <Image
                    resizeMode="cover"
                    style={{ height: 13, width: 13, marginLeft: 2 }}
                    source={require('../assets/plus.png')} />
            </View>
            <View style={{ flexDirection: 'row', marginLeft:5}}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('SearchScreen')}
                style={{ padding: 10, 
                backgroundColor: 'white',
                 width: '80%',
                  flexDirection: 'row'
                   }}>

                    <Image
                        resizeMode="cover"
                        style={{ height: 18, width: 18, }}
                        source={require('../assets/search.png')} />

                    <Text style={{ color: '#b8b6b6', marginLeft: 10 }}>Search for Product, Brand and More</Text>


                </TouchableOpacity>
                <View style={{ padding: 10, backgroundColor: '#caf0fc', width: '10%', flexDirection: 'row' }}>
                    <Image
                        resizeMode="cover"
                        style={{ height: 18, width: 18, }}
                        source={require('../assets/microphone-black-shape.png')} />

                </View>
            </View>



        </View>




    )
}
export default LogoTitle;