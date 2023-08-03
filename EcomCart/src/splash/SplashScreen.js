import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/flip-main.png')}
            />

        </View>
    )
}
export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#2874f0',
    },
    logo: {
        width: '100%',
        height: 115,
    },
})