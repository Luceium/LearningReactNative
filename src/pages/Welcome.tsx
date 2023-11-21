import React from 'react'
import { Button, Image, ImageBackground, View, Text, StyleSheet} from 'react-native'
import colors from '../config/colors'

const Welcome = ({ navigation }) => {
  return (
    <View style={{flex:1, backgroundColor:"#cfc", justifyContent: "flex-end", alignItems: "center"}}>
        <ImageBackground source={require('../../assets/background.jpg')} style={{height:"100%", width:"100%"}}/>
        
        <View style={{position: "absolute", top:20, alignItems: "center"}}>
            <Image source={require('../../assets/logo-red.png')} resizeMode="cover" style={{height:100, width:100}}/>
            <Text>Sell what you don't need</Text>
        </View>
        
        <View style={styles.button}><Button title='Sign up' onPress={() => navigation.navigate('item')} color={colors.secondary} /></View>
        <View style={styles.button}><Button title='Log in' onPress={() => navigation.navigate('item')} color={colors.primary} /></View>
    </View>
  )
}

const styles = StyleSheet.create({
      button: {
        width: "100%",
    },
})

export default Welcome