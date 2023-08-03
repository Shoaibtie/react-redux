import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/action";


const ProductDetails = ({ route, navigation }) => {


    const  { ItemId, ItemTitle, ItemTypes, ItemimgUrl, 
            Itemprice, Itemoff, Itemactually, Itemdetail ,Itemqty } = route.params;
    const ArrayCartData= {
        ItemId, ItemTitle, 
        ItemTypes, ItemimgUrl,
         Itemprice, Itemoff,
          Itemactually, Itemdetail,Itemqty
    }
    useEffect(() => {
        navigation.setOptions({
            title: ItemTitle,

        })

    }, [])




    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
    
    const addItemToCart = item => {
        dispatch(addToCart(item))
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    //   },[cartItems])


    const removeItemFromCart = item =>
    dispatch(removeFromCart(item))


    return (
        <View style={{ flex: 1,backgroundColor:'white'}}>
            <ScrollView>
                <View style={{ backgroundColor: 'white' }}>
                    <Image
                        source={ItemimgUrl}
                        resizeMode="cover"
                        style={{ width: 300, height: 450, marginLeft: 50 }}
                    />
                </View>
                <View style={{ backgroundColor: 'white', elevation: 5, height: 150 }}>
                    <View style={{ marginLeft: 10, marginTop: 10, }}>
                        <Text style={{
                            fontSize: 17, color: 'black',
                            fontWeight: 'bold'
                        }}>Louis Philippe Sport</Text>
                        <Text style={{ color: '#797a7a' }}>Solid Men Polo Neck Pink Shorts</Text>
                        <View style={{
                            marginTop: 5, height: 50, width: '100%',
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                backgroundColor: 'green',
                                height: 25, width: 50, flexDirection: 'row',
                                borderRadius: 5, marginTop: 5
                            }}>
                                <Text style={{
                                    color: 'white', marginLeft: 4,
                                    marginTop: 1
                                }}>3.5</Text>
                                <Image
                                    source={require('../assets/star.png')}
                                    style={{ height: 13, width: 13, marginLeft: 2, marginTop: 3.5 }}
                                />
                            </View>
                            <View>
                                <Text style={{
                                    marginLeft: 15,
                                    color: '#797a7a', marginTop: 7
                                }}>Good | 33 ratings</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                textDecorationLine: 'line-through',
                                textDecorationStyle: 'solid', fontSize: 20,color:'black'
                            }}>₹ 1,999</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10, color: 'black' }}>₹ 1,100</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10, color: 'green' }}>40% off</Text>

                        </View>
                    </View>
                </View>
               
            </ScrollView>
            { cartItems.filter(item=>item.ItemId==ItemId).length > 0 ?
                 
                 <View style={{backgroundColor:'green',width:'100%',flexDirection:'row'}}>


                   <View style={{backgroundColor:'red',width:'40%',height:64}}>
                   <TouchableOpacity style={{
                       
                        backgroundColor:'red',
                        alignItems:'center'
                    }}
                    onPress={()=>removeItemFromCart(ArrayCartData)}
                    >
                        <Text style={{color:'white',fontSize:30,marginTop:10}}>-</Text>
                        </TouchableOpacity>
                   
                   </View>


                   <View style={{backgroundColor:'#2874f0',width:'20%',height:64,alignItems:'center'}}>
                       <Text style={{color:'white',fontSize:30,marginTop:10}}>{cartItems.filter(item=>item.ItemId==ItemId).length}</Text>
                   </View>


                   <View style={{backgroundColor:'green',width:'40%',height:64}}>
                   <TouchableOpacity style={{
                        height:63,
                        backgroundColor:'green',
                        alignItems:'center'
                    }}
                    onPress={()=>addItemToCart(ArrayCartData)}
                    >
                        <Text style={{color:'white',fontSize:30,marginTop:10}}>+</Text>
                        </TouchableOpacity>
                   </View>
                </View>
                
                
                :
                
                         
                <View style={{ backgroundColor:'#2874f0', height:63,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{
                      
                        
                    }}
                    onPress={()=>addItemToCart(ArrayCartData)}
                    >
                            <Text style={{fontSize:25,color:'white'}}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>

                
}
        </View>
    )
}
export default ProductDetails;