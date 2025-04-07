import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreeen({ navigation }) {
    return (
        <ImageBackground 
        blurRadius={10}
        style = {styles.background} source={require('../assets/background.jpg')}>
            <View style = {styles.logoContainer}>
                <Image style = {styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style = {styles.tagLine}>Sell what you don't need</Text>
            </View>
            <View style = {styles.buttonsContainer}>
                <AppButton title = "Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
                <AppButton title = "Register" color = "secondary" onPress={() => navigation.navigate(routes.REGISTER)}/>
                <View style = {styles.registerButton}></View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    buttonsContainer: {
        width: "100%",
        padding: 20
    },
    
    logo: {
        width: 100,
        height: 100,
    },
    
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },

    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
    

})

export default WelcomeScreeen;