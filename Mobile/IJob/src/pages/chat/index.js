import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../../styles/styles'
import ConversationComponent from '../../components/conversationComponent'

export default function ChatPage() {
  return (
    <View style={{backgroundColor:"#F1F6F9", flex:1}}>
      <View style = {[styles.container, {flex:0}]}>
        <TextInput placeholderTextColor={'gray'} placeholder='Buscar conversa' style={[styles.formInput,{width:'90%', backgroundColor:'white', borderColor:'gray', elevation:6,}]}/>
        <ConversationComponent
          name='Ana Maria Carolina'
          lastMsg='Agendado para quinta feira'
        />
      
      </View>
    </View>
  )
}