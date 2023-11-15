import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import HeaderComponent from '../../components/headerComponent'
import AvatarComponent from '../../components/avatarComponent'
import HeaderChat from '../../components/headerChat'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Icon } from '@rneui/base'
import { Platform } from 'react-native'
import { MensageUser, MensageWorker } from "../../components/mensage";


export default function Conversation() {
  return (
    <View style={{backgroundColor:"#F1F6F9", flex:1,}}> 
        <HeaderComponent title="Chat com prestador"/>
        <View style={[{flex:1, backgroundColor:'#F1F6F9',height:600}]}> 
            <HeaderChat name='Alexandre Souza Nunes' />
            <MensageUser text='Olá boa tarde'/>
            <MensageWorker text='Olá como posso ajudar ?'/>

        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        >
        <View style={{ alignContent:'center', backgroundColor:'#F1F6F9', flexDirection:'row', padding:8}}>
        <TextInput
          style={{      
            height: 40,
            width:300,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop:30,
            marginRight:18,
            borderRadius: 8,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            elevation:5
        }}
          placeholder="Digite algo..."
        />
        <Icon name='send' style={{ marginTop:30}}
        size={48}
        color={'#394867'}
        />
        </View>
        </KeyboardAvoidingView>
    </View>
  )
}