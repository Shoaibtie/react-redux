import React,{useEffect} from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {  allremoveFromCart } from "../redux/action";
const Success = ({ route }) =>{

    useEffect(()=>{
        removeItemFromCart()
    },[])
    const navigation = useNavigation();
    const  { Username } = route.params;

    const dispatch = useDispatch()
    
    const cartItems = useSelector(state => state.cartItems)

    const removeItemFromCart = item =>
    dispatch(allremoveFromCart())

    console.log('Cart item : ',cartItems);

    
    return(
        <View style={{flex:1,backgroundColor:'#2874f0'}}>
            <Image 
              source={require('../assets/flip-main.png')}
              style={{height:120,width:'100%',marginTop:50}}
            />
            <View style={{alignItems:'center',marginTop:30}}>
            <Text style={{fontSize:40,color:'white'}}>Thank you {Username}</Text>
            <Text style={{fontSize:40,color:'white'}}> for shopping </Text>
            <Text style={{fontSize:40,color:'white'}}> with us</Text>
            </View>
            <TouchableOpacity style={{alignItems:'center',marginTop:80}}
             onPress={()=>navigation.popToTop()}
            >
                <Text style={{fontSize:25,color:'white'}}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Success;