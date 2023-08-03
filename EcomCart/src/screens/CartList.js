import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/action";
import { useNavigation } from '@react-navigation/native';

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}
const CartList = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartItems)


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

  const addItemToCart = item => {
    dispatch(addToCart(item))
  }

  const removeItemFromCart = item =>
    dispatch(removeFromCart(item))


  return (
    <View
      style={{
        flex: 1
      }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={filterList}
          keyExtractor={item => item.ItemId}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item,index }) => (
            <View style={styles.bookItemContainer} >
              <View style={{
                flexDirection: 'row',
                backgroundColor: '#fcba03',
                height: 100,
                width: '100%',
                borderRadius: 5,
                elevation: 5
              }}
            
              >
                <Image source={item.ItemimgUrl}
                  style={{ height: 70, width: 60, marginTop: 10, marginLeft: 10 }}
                />
                <View style={{ width: 150 }}>
                  <Text style={{
                    fontSize: 30, color: 'white',
                    marginLeft: 20,
                  }}
                  >{item.ItemTitle}</Text>
                  <Text style={{
                    fontSize: 15, color: 'white',
                    marginLeft: 20
                  }}
                  numberOfLines={1}
                  >{item.Itemdetail}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 7 }}>
                  <TouchableOpacity onPress={() => removeItemFromCart(item)}>
                    <Image
                      source={require('../assets/minus-sign.png')}
                      style={{ height: 50, width: 50 }}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: 'white', fontSize: 35, marginLeft: 9 }}>
                    {cartItems.filter(items => items.ItemId == item.ItemId).length}
                  </Text>
                  <TouchableOpacity onPress={() => addItemToCart(item)}>
                    <Image
                      source={require('../assets/plus-sign.png')}
                      style={{ height: 40, width: 40, marginLeft: 10,marginTop:5 }}
                    />
                  </TouchableOpacity>
                </View>


              </View>


            </View>
          )}

        />

      )

        : (
          <View style={{justifyContent:'center',alignItems:'center',marginTop:200}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'red'}}>Your cart is empty :'(</Text>
          </View>
        )}
        {cartItems.length !== 0 ?

      <TouchableOpacity style={{
        padding: 10, backgroundColor: '#2874f0',
        alignItems: 'center', height: 60
      }}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={{ color: 'white', fontSize: 25 }}>Checkout</Text>
      </TouchableOpacity>:null}
    </View>
  )
}
export default CartList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10
  },

})
