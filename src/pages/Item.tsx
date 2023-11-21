import React from 'react'
import { Button, Image, TouchableNativeFeedback, View } from 'react-native'
import colors from '../config/colors'

const Item = () => {
  return (
    <View style={{backgroundColor: colors.background, flex: 1, justifyContent: "center", alignItems: "center"}}>
      <TouchableNativeFeedback onPress={() => console.log('pressed')}>
        <View style={{position: "absolute", width: 30, height: 30, top: 20, left: 20, backgroundColor: colors.secondary}}/>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => console.log('pressed')}>
        <View style={{position: "absolute", width: 30, height: 30, top: 20, right: 20, backgroundColor: colors.primary}}/>
      </TouchableNativeFeedback>

      <Image source={require('../../assets/chair.jpg')} resizeMode="contain" style={{height:"100%", width: "100%", }}/>
    </View>
  )
}

export default Item