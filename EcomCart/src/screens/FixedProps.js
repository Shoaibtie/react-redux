import React from "react";
import { View, Text, Image,TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native';

const FixedProps = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', marginBottom: 35, marginTop: 10, }}>
            <View style={{
                width: 120,
                height: 120,
                borderTopLeftRadius: 10, borderTopRightRadius: 10,
                elevation: 4,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 8
            }}
            >
                <TouchableOpacity onPress={()=>navigation.navigate('Product', {
            itemId: 1,
            otherParam: 'Mens Shorts',
            ProductName:'Shorts'
          })} activeOpacity={5}>
                <Image source={require('../assets/short-2.webp')} style={{ height: 120, width: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <View style={{
                    width: 120,
                    height: 50,

                    elevation: 4,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: '900' ,color:'black'}}>From ₹99</Text>
                    <Text style={{ color:'black'}}>shorts</Text>
                </View>
                </TouchableOpacity>
            </View>



            <View style={{
                width: 120,
                height: 120,
                borderTopLeftRadius: 10, borderTopRightRadius: 10,
                elevation: 4,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 8
            }}>
               <TouchableOpacity onPress={()=>navigation.navigate('Product', {
            itemId: 2,
            otherParam: 'Saree',
            ProductName:'Saree'
          })} activeOpacity={5}>
                <Image source={require('../assets/sareer-1.webp')} style={{ height: 120, width: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <View style={{
                    width: 120,
                    height: 50,

                    elevation: 4,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: '900',color:'black'}}>From ₹49</Text>
                    <Text style={{ color:'black'}}>Saree</Text>
                </View>
                </TouchableOpacity>
            </View>


            <View style={{
                width: 120,
                height: 120,
                borderTopLeftRadius: 10, borderTopRightRadius: 10,
                elevation: 4,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 8
            }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Product', {
            itemId: 3,
            otherParam: 'Mens T-Shirt',
            ProductName:'Shirt'
          })} activeOpacity={5}>
                <Image source={require('../assets/t-shirt-1.webp')} style={{ height: 120, width: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <View style={{
                    width: 120,
                    height: 50,

                    elevation: 4,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: '900',color:'black' }}>From ₹199</Text>
                    <Text style={{color:'black'}}>T-Shirt</Text>
                </View>
                </TouchableOpacity>
            </View>








        </View>
    )
}
export default FixedProps;