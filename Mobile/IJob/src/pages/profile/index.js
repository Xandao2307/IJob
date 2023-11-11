import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import AvatarComponent from '../../components/avatarComponent'
import { Icon, Image } from '@rneui/base'
import { TouchableOpacity } from 'react-native'

export default function Profile() {
  return (
    <View style={{backgroundColor:"#F1F6F9", flex:1}}>
      <View style = {[styles.container, {flex:0}]}>
        <View style={{marginTop:40}}>
          <AvatarComponent size={150}/>
        </View>
        <Text style={[styles.formTitle,{fontSize:28, paddingBottom:0,marginTop:20, margin:0,marginLeft:30, alignSelf:'flex-start'}]}>Silvia Pacheco</Text>  
        
        <View style={{width:320,flexDirection:'row', marginTop:15}}>
          <View style={{flexDirection:'column', alignSelf:'flex-start', width:270}}>
            <Text style={[styles.formTitle,{fontSize:16, paddingBottom:4, margin:0,marginLeft:-1, alignSelf:'flex-start'}]}>Serviços disponíveis: </Text>
            <Text style={{fontSize:15, color:'#14274E', alignSelf:'flex-start'}}>Manicure/Podologia</Text>
          </View>
          <Icon name='edit' size={35} style={{marginLeft:10, marginTop:10}}/>
        </View>

        <View style={{width:320,flexDirection:'row', marginTop:15}}>
          <View style={{flexDirection:'column', alignSelf:'flex-start', width:270}}>
            <Text style={[styles.formTitle,{fontSize:16, paddingBottom:4, margin:0,marginLeft:-1, alignSelf:'flex-start'}]}>Descrição: </Text>
            <Text style={{fontSize:15, color:'#14274E', alignSelf:'flex-start'}}>Silvia Pacheco é uma experiente manicure e podóloga que presta seus...</Text>
          </View>
          <Icon name='edit' size={35} style={{marginLeft:10, marginTop:10}}/>
        </View>

        <View style={{alignSelf:'flex-start', marginLeft:30, marginTop:20}} >
        <Text style={[styles.formTitle,{fontSize:16, paddingBottom:4, margin:0,marginLeft:-1, alignSelf:'flex-start'}]}>Vitrine do prestador: </Text>

          <Image
            source={{ uri: 'https://www.iped.com.br/_upload/content/2014/11/14/boa-manicure-pedicure.jpg'}}
            style={{ width: 130, height: 130 }}
          />
        </View>

        <View style = {{flexDirection: 'row', marginTop:5}}>
            <TouchableOpacity 
            style={[styles.formButton,{width:130, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end'}]}
            >
            <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Adicionar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.formButton,{width:130, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end'}]}
            >
            <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Remover foto</Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
    
  )
}