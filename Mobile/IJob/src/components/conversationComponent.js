import { View, Text } from 'react-native'
import React from 'react'
import AvatarComponent from '../components/avatarComponent'
import { styles } from '../styles/styles'

export default function conversationComponent(props) {
  return (
    <View style={{flexDirection:'row', alignSelf:'flex-start',marginLeft:40, paddingTop:20}}>
        <AvatarComponent
        size={80}
        />
        <View style={{flexDirection:'column'}}>
            <Text style={[styles.formTitle,{fontSize:15, paddingBottom:0,paddingTop:20, margin:0,marginLeft:10, alignSelf:'flex-start'}]}>{props.name}</Text>
            <Text style={[styles.formTitle,{fontSize:15, paddingBottom:0, margin:0,marginLeft:10, fontWeight:'200',color:'gray'}]}>{props.lastMsg}</Text>
        </View>
  </View>
  )
}