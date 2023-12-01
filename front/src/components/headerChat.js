import { View, Text } from 'react-native'
import React from 'react'
import AvatarComponent from './avatarComponent'

export default function headerChat(props) {
  return (
    <View>
        <View style={{width:500, height:90, backgroundColor:'#D9D9D9', alignItems:'center',flexDirection:'row'}}>
            <View style={{marginLeft:35}}>
                <AvatarComponent size={75}/>
            </View>
            <Text style={{color:'#14274E', fontSize:16, fontWeight:'700', marginLeft:15}}>{props.name}</Text>
        </View>
    </View>
  )
}