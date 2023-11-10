import { View, Text, TextInput, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../../styles/styles'
import AvatarComponent from '../../components/avatarComponent'
import { StyleSheet } from 'react-native'
export default function ChatPage() {
  useEffect(() => {
    // Esta função será executada na montagem da página
    console.log('Página foi montada');
    // Coloque aqui o código que você quer executar na montagem da página
    // Lembre-se de lidar com a limpeza (cleanup) se necessário, usando um return
    return () => {
      // Código de limpeza (se necessário)
    };
  }, []);
   // O array de dependências vazio indica que o efeito deve ser executado apenas na montagem
  return (
    <View style={{backgroundColor:"#F1F6F9", flex:1}}>
      <View style = {[styles.container, {flex:0}]}>
        <TextInput placeholderTextColor={'gray'} placeholder='Buscar conversa' style={[styles.formInput,{width:'90%', backgroundColor:'white', borderColor:'gray', elevation:6,}]}/>

        <View style={{flexDirection:'row', alignSelf:'flex-start',marginLeft:40, paddingTop:20}}>
          <AvatarComponent
            size={80}
          />
          <View style={{flexDirection:'column'}}>
           <Text style={[styles.formTitle,{fontSize:15, paddingBottom:0,paddingTop:20, margin:0,marginLeft:10, alignSelf:'flex-start'}]}>Ana Maria Carolina</Text>
           <Text style={[styles.formTitle,{fontSize:15, paddingBottom:0, margin:0,marginLeft:10, fontWeight:'200',color:'gray'}]}>Agendado para quinta feira</Text>
          
           {/* <View
            style={{
              borderBottomColor: '#D9D9D9',
              borderBottomWidth: StyleSheet.hairlineWidth,

            }}/> */}
          </View>
        </View>
      
      </View>
    </View>
  )
}