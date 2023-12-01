import { View, Text } from 'react-native'
import React from 'react'
import AvatarComponent from './avatarComponent'
import { styles } from '../styles/styles'

export default function workerNameDate(props) {
  return (
    <View style={{flexDirection: 'row'}}>
        <AvatarComponent
        size={75}
        />
        <View style={{flexDirection:'column', marginTop:15, width:175}}>
            <Text style={[styles.formTitle,{fontSize:16, paddingBottom:4, margin:0,marginLeft:-1, alignSelf:'flex-start'}]}>{props.name}</Text>
            <Text style={{fontSize:15, color:'#14274E', alignSelf:'flex-start'}}>{props.date}</Text>
        </View>
    </View>
    )
}