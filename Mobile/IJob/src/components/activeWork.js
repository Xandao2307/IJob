import { View, Text } from 'react-native'
import React from 'react'
import AvatarComponent from './avatarComponent'
import { TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'

export default function activeWork(props) {
  return (
    <View style={{borderWidth:1, marginTop:20, paddingLeft:12, paddingRight:12, borderRadius:12}}>
        <View style = {{flexDirection: 'row', marginTop:20}}>
            <AvatarComponent
            size={150}
            />
            <View style={{flexDirection:'column', paddingTop:15}}>
                <Text style={[styles.formTitle,{fontSize:16, paddingBottom:4, margin:0,marginLeft:-1, alignSelf:'flex-start'}]}>{props.name}</Text>
                <Text style={[styles.formTitle,{fontSize:16, paddingBottom:0, margin:0, alignSelf:'flex-start'}]}>Serviços disponíveis:</Text>
                <Text style={{fontSize:14, color:'#14274E', alignSelf:'flex-start'}}>{props.profession}</Text>
                <Text style={[styles.formTitle,{fontSize:16, paddingBottom:0, margin:0, alignSelf:'flex-start'}]}>Agendamento:</Text>
                <Text style={{fontSize:14, color:'#14274E', alignSelf:'flex-start'}}>{props.date}</Text>
            </View>
        </View>
        
        <View style = {{flexDirection: 'row', marginTop:5}}>
            <TouchableOpacity 
            onPress={props.assessmentFn}
            style={[styles.formButton,{width:130, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end'}]}
            >
            <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Avaliar</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity 
            onPress={props.informationFn}
            style={[styles.formButton,{width:130, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end'}]}
            >
            <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Mais Informações</Text>
            </TouchableOpacity> */}
        </View>
  </View>
  )
}
