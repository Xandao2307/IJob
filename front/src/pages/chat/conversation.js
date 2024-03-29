// ChatScreen.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MensageUser, MensageWorker } from "../../components/mensage";
import HeaderComponent from "../../components/headerComponent";
import HeaderChat from "../../components/headerChat";

import ChatService from '../../services/chatService'

import UserInstance from "../../constants/userInstance";

export function Conversation({ route, socketProvider }) {

  const { socket } = socketProvider

  const { user } = route.params

  const client = new UserInstance().getData()

  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null)
  const [inputText, setInputText] = useState('');

  const { startChat } = ChatService()


  const initializeChat = useCallback(async () => {
    const chat = await startChat(client.id, user.id)

    setChatId(chat.chatId)

    if (chat.messages && chat.messages.length) {
      setMessages(chat.messages)
    }

  }, [])


  useEffect(() => {
    initializeChat()
  }, []);

  useEffect(() => {
    socket.on('messageResponse', (data) => {
      setMessages(old => [...old, data])
    });
  }, [socket]);


  const renderMessage = ({ item }) => {
    if (Number(item.userId) == Number(client.id)) return <MensageUser text={item.text} />
    else return <MensageWorker text={item.text} />
  }

  const handleSend = () => {
    if (inputText.trim() === '' || !chatId) return

    socket.emit('message', {
      text: inputText,
      id: chatId,
      socketID: socket.id,
      userId: Number(client.id)
    });

    setInputText('')
  };

  return (
    <View style={stylesConversation.container}>
      <HeaderComponent
        title='Conversa'
      />
      <HeaderChat name={user.name} />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        contentContainerStyle={stylesConversation.messagesContainer}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={stylesConversation.inputContainer}
      >
        <TextInput
          style={stylesConversation.input}
          placeholder="Digite sua mensagem..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={stylesConversation.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={28} color="#394867" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const stylesConversation = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F9'
  },
  messagesContainer: {
    padding: 10,
  },
  messageContainer: {
    backgroundColor: '#F1F6F9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F1F6F9'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    elevation: 5
  },
  sendButton: {
    backgroundColor: '#F1F6F9',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Conversation;
