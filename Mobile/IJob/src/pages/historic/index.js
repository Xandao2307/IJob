import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import AvatarComponent from '../../components/avatarComponent'
import { TouchableOpacity } from 'react-native'

export default function HistoricPage() {
  return (
    <View style={{backgroundColor:"#F1F6F9", flex:1}}>
      <View style = {[styles.container, {flex:0}]}>
       <Text style={[styles.formTitle,{fontSize:20, paddingBottom:0,marginTop:20, margin:0,marginLeft:20, alignSelf:'flex-start'}]}>Serviços ativos:</Text>
       
       <View style={{borderWidth:1, marginTop:20, paddingLeft:12, paddingRight:12, borderRadius:12}}>
        <View style = {{flexDirection: 'row', marginTop:20}}>
            <AvatarComponent
              size={150}
            />
              <View style={{flexDirection:'column', paddingTop:15}}>
                <Text style={[styles.formTitle,{fontSize:16, paddingBottom:4, margin:0,marginLeft:-1, alignSelf:'flex-start'}]}>Ana Maria Carolina</Text>
                <Text style={[styles.formTitle,{fontSize:16, paddingBottom:0, margin:0, alignSelf:'flex-start'}]}>Serviços disponíveis:</Text>
                <Text style={{fontSize:14, color:'#14274E', alignSelf:'flex-start'}}>Manicure/Pedicure</Text>
                <Text style={[styles.formTitle,{fontSize:16, paddingBottom:0, margin:0, alignSelf:'flex-start'}]}>Agendamento:</Text>
                <Text style={{fontSize:14, color:'#14274E', alignSelf:'flex-start'}}>30/10/2023</Text>
              </View>
          </View>
          <View style = {{flexDirection: 'row', marginTop:5}}>
            <TouchableOpacity 
              style={[styles.formButton,{width:125, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end'}]}
            >
              <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Avaliações</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.formButton,{width:125, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end'}]}
            >
              <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Mais Informções</Text>
            </TouchableOpacity>
          </View>
      </View>
      </View>
    </View>

  )
}