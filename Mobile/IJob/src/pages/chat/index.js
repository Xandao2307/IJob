import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import ConversationComponent from '../../components/conversationComponent';
import { useNavigation } from '@react-navigation/native';
import ChatService from '../../services/chatService';
import UserInstance from "../../constants/userInstance";
import { Text } from 'react-native';

// import socketIO from 'socket.io-client';

// const socket = socketIO.connect('http://192.168.1.11:4000');

export default function ChatPage({ socketProvider }) {
  const navigation = useNavigation();
  const { loadChats } = ChatService()

  const { socket } = socketProvider

  const user = new UserInstance().getData()

  const [conversations, setConversations] = useState([]);

  const mapConversations = (chats) => {
    return chats.map(chat => {
      return {
        name: chat[0],
        id: chat[1],
        lastMsg: chat[2]
      }
    })
  }

  const runLoadChats = useCallback(async () => {
    const chats = await loadChats(Number(user.id))
    if (chats && chats.length) setConversations(mapConversations(chats))
  }, [])


  useEffect(() => {
    runLoadChats()
  }, [runLoadChats])

  useEffect(() => {
    socket.on('messageResponse', (data) => {
      runLoadChats()
    });
  }, [socket]);


  if (conversations) {
    return (
      <View style={styles.container}>
        <Text style={[{fontSize:27, fontWeight:'800', color:'#14274E', textAlign:'center',}]}>Opss você tem nenhuma mensagem 😕</Text>  
      </View>
    );
  }


  return (
    <View style={{ backgroundColor: '#F1F6F9', flex: 1 }}>
      <View style={[styles.container, { flex: 0 }]}>

        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 15, paddingLeft: 10 }}
          renderItem={({ item }) => (
            <ConversationComponent
              name={item.name}
              lastMsg={item.lastMsg}
              onPress={() => navigation.navigate('Conversation', {
                user: {
                  id: Number(item.id),
                  name: item.name
                }
              })}
            />
          )}
        />
      </View>
    </View>
  );
}
