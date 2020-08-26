import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

export default function WelcomeScreen() {
    return (
       <ImageBackground 
       style={styles.background}
       source={require("../assets/background.jpg")}
       >
           <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
          <Text>Sell What You Don't Need </Text>
           <View style={styles.loginButton}></View>
           <View style={styles.registerButton}></View>

       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center"
    
    },
    loginButton:{
            width:"100%",
            height: 70,
            backgroundColor: "pink"
        },
        registerButton:{
            width:"100%",
            height: 70,
            backgroundColor: "#4ecdc4"
        },
        logo:{
            width:100,
            height:100,
            position:"absolute",
            top:70


        
        }
    
  
})
