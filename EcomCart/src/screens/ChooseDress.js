import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ChooseDress = () => {
    
    const navigation = useNavigation();

    return (
        <View style={{ height: 500, backgroundColor: '#e6a1b1' }}>
            <View style={{
                height: 40, width: 150,
                backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                marginLeft: 125, borderRadius: 3, marginTop: 15
            }}>
                <Text style={{ fontWeight: '900' ,color:'#b8b6b6'}}>Choose Your Dress</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                <View style={{ height: 200, width: 180, backgroundColor: 'white', alignItems: 'center',elevation: 5,}}>
                    <Image source={require('../assets/t-shirt-2.webp')} style={{
                        height: 130,
                        width: 130, marginTop: 5
                    }} />
                    <Text style={{ marginTop: 5 ,color:'black'}}>T-Shirt</Text>
                    <TouchableOpacity style={{ padding: 5, backgroundColor: '#a1d1e6', borderRadius: 5,elevation: 5}}
                     onPress={()=>navigation.navigate('Product', {
                        itemId: 1,
                        otherParam: 'Mens Shorts',
                        ProductName:'Shorts'
                      })} activeOpacity={5}
                    >
                        <Text style={{fontWeight:'500'}}>Explore</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 200, width: 180, backgroundColor: 'white', alignItems: 'center',elevation: 5}}>
                    <Image source={require('../assets/cloths-5.webp')} style={{
                        height: 130,
                        width: 130, marginTop: 5
                    }} />
                    <Text style={{ marginTop: 5 ,color:'black'}}>Suits</Text>
                    <TouchableOpacity style={{ padding: 5, backgroundColor: '#a1d1e6', borderRadius: 5 ,elevation: 5}}
                      onPress={()=>navigation.navigate('Product', {
                        itemId: 2,
                        otherParam: 'Saree',
                        ProductName:'Saree'
                      })} activeOpacity={5}
                    >
                        <Text style={{fontWeight:'500'}}>Explore</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
                <View style={{ height: 200, width: 180, backgroundColor: 'white', alignItems: 'center',elevation: 5}}>
                    <Image source={require('../assets/sareer-2.webp')} style={{
                        height: 130,
                        width: 130, marginTop: 5
                    }} />
                    <Text style={{ marginTop: 5 ,color:'black'}}>Saree</Text>
                    <TouchableOpacity style={{ padding: 5, backgroundColor: '#a1d1e6', borderRadius: 5 ,elevation: 5}}
                      onPress={()=>navigation.navigate('Product', {
                        itemId: 3,
                        otherParam: 'Mens T-Shirt',
                        ProductName:'Shirt'
                      })} activeOpacity={5}
                    >
                        <Text style={{fontWeight:'500'}}>Explore</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 200, width: 180, backgroundColor: 'white', alignItems: 'center',elevation: 5}}>
                    <Image source={require('../assets/short-1.webp')} style={{
                        height: 130,
                        width: 130, marginTop: 5
                    }} />
                    <Text style={{ marginTop: 5,color:'black' }}> Shorts</Text>
                    <TouchableOpacity style={{ padding: 5, backgroundColor: '#a1d1e6', borderRadius: 5,elevation: 5 }}
                      onPress={()=>navigation.navigate('Product', {
                        itemId: 1,
                        otherParam: 'Mens Shorts',
                        ProductName:'Shorts'
                      })} activeOpacity={5}
                    >
                        <Text style={{fontWeight:'500'}}>Explore</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
export default ChooseDress;