import { View, Text } from 'react-native'
import React from 'react'
import AvatarComponent from './avatarComponent'
import { TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'
import WorkerNameDate from './workerNameDate'
import { Pressable } from 'react-native'

export default function informationWork(props) {
  return (
    <View style = {{flexDirection: 'row', marginTop:20, maxWidth:380}}>
        
        <Pressable onPress={props.avatarNameDataFn}>
          <WorkerNameDate
          name={props.name}
          date={props.date}
          />
        </Pressable>
        
        <TouchableOpacity 
        onPress={props.assessmentFn}
        style={[styles.formButton,{width:85, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end', margin:0, marginBottom:25, marginLeft:15, borderRadius:6}]}
        >
         <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Concluir</Text>
        </TouchableOpacity>
  </View>
  )
}