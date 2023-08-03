import React, { useState } from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native"
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {

    const navigation = useNavigation();

    const cartItems = useSelector(state => state.cartItems);

    function getUnique(arr, index) {

        const unique = arr
            .map(e => e[index])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);

        return unique;
    }

    const filterList = getUnique(cartItems, 'ItemId');

    const result = cartItems.reduce((total, currentValue) => total = total + currentValue.Itemactually,0);

    //  console.log(result);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");

//   console.log(phone.length)
    const checkTextInput = () => {
        //Check for the Name TextInput
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!name.trim()) {
          alert('Please Enter Name');
          return;
        }
        //Check for the Email TextInput
        if (!email.trim() || reg.test(email)===false) {
          alert('Please Enter Email');
          return;
        }
        if (!phone.trim() || phone.length  != 10 ) {
            alert('Please Enter Phone');
            return;
          }
          if (!address.trim()) {
            alert('Please Enter Address');
            return;
          }
          if (!pincode.trim() || pincode.length  != 6 ) {
            alert('Please Enter Pincode');
            return;
          }
        //Checked Successfully
        //Do whatever you want
        navigation.navigate("Success",{
            Username:name,
        })
      };
    


    return (
        <View style={{flex:1,backgroundColor:'#ffb8e7'}} >
            <View style={{ backgroundColor: 'white' }}>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color:'black',
                    }}
                    placeholderTextColor='black'
                    onChangeText={setname}
                    value={name}
                    placeholder="Enter the Name"
                />
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color:'black',
                    }}
                    onChangeText={setemail}
                    value={email}
                    placeholder="Enter the Email"
                    placeholderTextColor='black'
                />
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color:'black',
                    }}
                    onChangeText={setphone}
                    value={phone}
                    placeholder="Enter the Phone"
                    keyboardType="numeric"
                    placeholderTextColor='black'
                />
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color:'black',
                    }}
                    onChangeText={setaddress}
                    value={address}
                    placeholder="Enter the Adress"
                    placeholderTextColor='black'
                />

                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color:'black',
                    }}
                    onChangeText={setpincode}
                    value={pincode}
                    placeholder="Enter the Pincode"
                    keyboardType="numeric"
                    placeholderTextColor='black'
                />

            </View>
            <View>



                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around',
                    marginBottom: 15, backgroundColor: '#2874f0', height: 40, alignItems: 'center'
                }}>

                    <Text style={{ color: "white", fontSize: 20 }}>Product</Text>
                    <Text style={{ color: "white", fontSize: 20 }}>Image</Text>
                    <Text style={{ color: "white", fontSize: 20 }}>Qty</Text>
                    <Text style={{ color: "white", fontSize: 20 }}>Price</Text>
                    <Text style={{ color: "white", fontSize: 20 }}>Total</Text>
                </View>
                <ScrollView style={{height:270}}>

                    {

                        filterList.map((item) => {
                            return (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around', marginBottom: 10
                                }}>

                                    <Text style={{width:51,color:'black'}}>{item.ItemTitle}</Text>
                                    <Image source={item.ItemimgUrl} style={{
                                        width: 50,
                                        height: 50,
                                    }} />
                                    <Text style={{color:'black'}}>{cartItems.filter(items => items.ItemId == item.ItemId).length}</Text>
                                    <Text style={{color:'black'}}>{item.Itemactually}</Text>
                                    <Text style={{color:'black'}}>{cartItems.filter(items => items.ItemId == item.ItemId).length * item.Itemactually}</Text>
                                    
                                </View>
                            )

                        })

                    }
                    <View style={{backgroundColor:'#9dc1fa',height:50,width:'100%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <Text style={{color:'black',fontSize:15,}}>Grand Total</Text>
                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>{result}</Text>

                    </View>

                </ScrollView>



              

            </View>
            {/* <View>

<TouchableOpacity style={{ padding: 10,
     backgroundColor: '#2874f0',height:50,alignItems:'center'}}
     onPress={checkTextInput}
     >
    <Text style={{ color: 'white',fontSize:25 }}>Shop Now</Text>

</TouchableOpacity>
</View> */}
<View style={{ backgroundColor:'#2874f0', height:63,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{
                      
                        
                    }}
                    onPress={checkTextInput}
                    >
                            <Text style={{ color: 'white',fontSize:25 }}>Shop Now</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}

export default Checkout;