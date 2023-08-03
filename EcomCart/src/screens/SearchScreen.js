import React,{useState} from "react";
import { View, Text ,Image,TouchableOpacity,TextInput,FlatList,StyleSheet} from "react-native";
import { AllFillter } from '../Json/Product';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState({});
  const [masterDataSource, setMasterDataSource] = useState(AllFillter);

  const searchFilterFunction = (text) =>{
    if(text){
      const newData =masterDataSource.filter(
        function(item){
          const itemData = item.name
          ? item.name.toUpperCase()
          :''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
    }
    else {
      
      setFilteredDataSource([]);
      setSearch(text);
    }
  }


  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <View style={{backgroundColor:'#ffe5e3',height:50,borderWidth:1,borderColor:'#2874f0'}}>
      <Text
        style={{marginLeft:40,marginTop:10,color:'black',fontSize:20,fontWeight:"bold"}}
        onPress={() => getItem(item)}>
        {item.name.toUpperCase()}
      </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
         marginTop:1,
          width: '100%',
          
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    navigation.navigate('ProductDetails',{
      ItemId:item.id,
      ItemTitle:item.name,
      ItemTypes:item.Types,
      ItemimgUrl:item.imgUrl,
      Itemprice:item.price,
      Itemoff:item.off,
      Itemactually:item.actually,
      Itemdetail:item.detail,
      Itemqty:item.Itemqty,

  })
    // alert('Id : ' + item.id + ' Name : ' + item.name);
  };

  return (
    <View>
      <View style={{width:'100%',height:63,backgroundColor:'#2874f0'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
           onPress={()=>navigation.goBack()}
          >
          <Image
           source={require('../assets/back.png')}
           style={{height:35,width:35,marginTop:12,marginLeft:5}}
          />
          </TouchableOpacity>
          <View style={{width:'87%',height:60}}>
            <TouchableOpacity style={{height:50,
            borderRadius:10,borderWidth:1,borderColor:'white',
            backgroundColor:'white',marginTop:5,marginLeft:12
              
          }}>
            <TextInput
              style={{fontSize:20,color:'black'}}
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              placeholder="Search here ..."
              placeholderTextColor="black"
            />

            </TouchableOpacity>
          </View>

        </View>
      </View>
      <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default SearchScreen;