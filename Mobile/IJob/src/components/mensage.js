import { View, Text } from 'react-native'
import React from 'react'

export function MensageUser(prop) {
  return (
    <View style={{backgroundColor:'#98A8C7', alignSelf:'flex-end', maxHeight:1000, width:265, borderRadius:8, marginBottom:30}}>
      <Text style={{color:'#14274E', textAlign:'justify', padding:8, fontSize:16, fontWeight:'500', }}>{prop.text}</Text>
    </View>
  )
}

export function MensageWorker(prop) {
  return (   
  <View style={{backgroundColor:'#D9D9D9', alignSelf:'flex-start', maxHeight:200, width:265, borderRadius:8, marginBottom:30}}>
    <Text style={{color:'#14274E', textAlign:'justify', padding:8, fontSize:16, fontWeight:'500', }}>{prop.text}</Text>
  </View>

  )
}