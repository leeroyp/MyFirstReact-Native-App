import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function WelcomeScreen() {
    return (
       <ImageBackground 
       style={styles.background}
       source={require("../assets/background.jpg")}
       >
           <View style={styles.loginButton}></View>
           <View style={styles.registerButton}></View>

       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-end"
    
    },
    loginButton:{
            width:"100%",
            height: 70,
            backgroundColor: "pink"
        },
        loginButton:{
            width:"100%",
            height: 70,
            backgroundColor: "#4ecdc4"
        },
    
  
})
