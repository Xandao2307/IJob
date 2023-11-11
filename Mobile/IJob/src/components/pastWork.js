import { View, Text } from 'react-native'
import React from 'react'
import AvatarComponent from './avatarComponent'
import { TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'
import WorkerNameDate from './workerNameDate'

export default function pastWork(props) {
  return (
    <View style = {{flexDirection: 'row', marginTop:20, maxWidth:380}}>
        <WorkerNameDate
        name={props.name}
        date={props.date}
        />

        <TouchableOpacity 
        onPress={props.assessmentFn}
        style={[styles.formButton,{width:85, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end', margin:0, marginBottom:25, marginLeft:15, borderRadius:6}]}
        >
         <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Avaliar</Text>
        </TouchableOpacity>
  </View>
  )
}