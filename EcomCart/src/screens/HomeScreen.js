import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ImageBackground
} from "react-native";
import { FlatListSlider } from 'react-native-flatlist-slider';
import { books, Banner } from '../Json/Product';
import ChooseDress from "./ChooseDress";
import FixedProps from "./FixedProps";
import LogoTitle from "./LogoTitle";

// function Separator() {
//     return <View style={{ borderBottomWidth: 5, borderBottomColor: '#a9a9a9' }} />
// }

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <LogoTitle/>

            {/* Search Bar */}
            {/* <View style={styles.search}>
                <TouchableOpacity style={styles.searchInput}
                    onPress={() => navigation.navigate('SearchScreen')}>
                    <Text style={styles.placeText}>Search for Product, Brand and More</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image
                        style={styles.images}
                        source={require('../assets/search.png')}
                    />
                </TouchableOpacity>
            </View> */}
            {/* Search Bar */}


            {/* Product Bar */}
            
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={books}
                keyExtractor={item => item.id.toString()}
                // ItemSeparatorComponent={() => Separator()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('Product', {
                        itemId: 2,
                        otherParam: 'Saree',
                        ProductName:'Saree'
                      })} activeOpacity={5}>
                    <View style={styles.bookItemContainer}>
                        <View>
                            <View style={styles.mainImage}>
                                <Image source={item.imgUrl} style={styles.thumbnail} />
                            </View>
                            <Text style={styles.textTitle} numberOfLines={1}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={styles.bookItemMetaContainer}>

                        </View>
                    </View>
                    </TouchableOpacity>
                  

                )}
            />
          
            {/* Product Bar */}

            {/* ScrollView Bar */}
            <ScrollView showsVerticalScrollIndicator={false} persistentScrollbar={true}>
                {/* ImageBackground Bar */}
                <ImageBackground
                    style={{ height: 130, width: '100%', marginBottom: 3 }}
                    source={require('../assets/banner.jpg')}
                >
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: '400', textAlign: 'center', marginTop: 30 }}>
                        EXTRA 30% OFF UP TO ₹100</Text>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '400', textAlign: 'center', }}>
                        On Your 1st Order Of clothing, Footware...</Text>
                    <TouchableOpacity style={{ padding: 7,
                     backgroundColor: '#28d3fa', width: 80, marginLeft: 160, marginTop: 4 
                
                }}>
                        <Text style={{ color: 'white' }}>Shop Now</Text>
                    </TouchableOpacity>
                </ImageBackground>
                {/* ImageBackground Bar */}
                {/* Slider Bar */}
                <FlatListSlider
                    data={Banner}
                    imageKey={'imgUrl'}
                    local
                    timer={5000}
                   width={400}
                   height={150}
                    onPress={() => alert('hello')}
                    indicatorActiveWidth={40}
                    

                />
                {/* Slider Bar */}

               {/* Export */}

                    <FixedProps/>
               {/* Export */}

                {/* Export */}

                <ChooseDress/>
               {/* Export */}







            </ScrollView>
            {/* ScrollView Bar */}


        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    //    Main Css
    text: {
        fontSize: 42,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
       


    },
    search: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 5
    },
    searchInput: {
        borderColor: '#b8b6b6',
        elevation: 1,
        width: '78%',
        borderWidth: 0.50,
        marginTop: 5
    },
    images: {
        width: 45,
        height: 45
    },
    placeText: {
        color: '#b8b6b6',
        marginLeft: 10,
        marginTop: 10

    }
    ,
    //    Product CSS 
    bookItemContainer: {
        flexDirection: 'row',
        paddingTop: 8,
        marginBottom: 40,

    },
    mainImage: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        elevation: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:5
    },
    thumbnail: {
        width: 35,
        height: 35,

    },
    bookItemMetaContainer: {
        padding: 5,
        paddingLeft: 10
    },
    textTitle: {
        fontSize: 12,
        fontWeight: '400',
        color:'black',
        marginLeft:5
        //marginLeft: 10
    },
    textAuthor: {
        fontSize: 18,
        fontWeight: '200'
    },
    buttonContainer: {
        position: 'absolute',
        top: 110,
        left: 10
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#24a0ed',
        padding: 5
    },
    buttonText: {
        fontSize: 22,
        color: '#fff'
    },

})

