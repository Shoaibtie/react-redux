import React,{useEffect} from "react";
import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity,Button} from "react-native";
import { AllFillter } from '../Json/Product';


const Product = ({ route, navigation }) => {

    const {ProductName,otherParam } = route.params;

    useEffect(()=>{
        navigation.setOptions({
            title:otherParam
        })

    },[])
    // console.log(route.params,"ghhghghgh");




    const FilterProd = AllFillter.filter(function (item) {
        return item.Types == ProductName;
    }).map(function ({ id, name, Types, imgUrl, price, off, actually, detail,Itemqty }) {
        return { id, name, Types, imgUrl, price, off, actually, detail,Itemqty };
    });
    // console.log(data);


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={FilterProd}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                // ItemSeparatorComponent={() => Separator()}
                renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={5} onPress={()=>navigation.navigate('ProductDetails',{
                    ItemId:item.id,
                    ItemTitle:item.name,
                    ItemTypes:item.Types,
                    ItemimgUrl:item.imgUrl,
                    Itemprice:item.price,
                    Itemoff:item.off,
                    Itemactually:item.actually,
                    Itemdetail:item.detail,
                    Itemqty:item.Itemqty,

                })}>
                    <View style={styles.bookItemContainer}>
                        <View style={styles.mainImage}>
                            <Image source={item.imgUrl} style={styles.thumbnail} />
                            <View>
                                <Text style={{marginLeft:5,color:'#797a7a',fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                                <Text style={{marginLeft:5,color:'#797a7a'}} numberOfLines={1}>{item.detail}</Text>
                                <View style={{flexDirection:'row',marginLeft:5}}>
                                <Text style={{textDecorationLine: 'line-through',
                                textDecorationStyle: 'solid',color:'#797a7a'}}>{item.price}</Text>
                                <Text style={{color:'#797a7a'}}>  ₹ {item.price}</Text>
                                <Text style={{color:'#37fa4e'}}>  {item.off}</Text>
                                </View>
                            </View>
                         
                        </View>
                    </View>
                    </TouchableOpacity>

                )}
            />
        </View>
    )
}
export default Product;

const styles = StyleSheet.create({
    bookItemContainer: {
        justifyContent: 'space-around',
        paddingTop: 8,
        marginBottom: 5,
        marginLeft: 5

    },
    mainImage: {
        width: 180,
        height: 280,

        elevation: 4,
        backgroundColor: 'white',
        alignItems: 'center',

        marginLeft: 5
    },
    thumbnail: {
        width: 150,
        height: 200,
    }



})