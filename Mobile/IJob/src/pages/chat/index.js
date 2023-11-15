import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import ConversationComponent from '../../components/conversationComponent';
import { useNavigation } from '@react-navigation/native';

export default function ChatPage() {
  const navigation = useNavigation();

  // Exemplo de lista de conversas
  const [conversations, setConversations] = useState([
    { id: '1', name: 'Ana Maria Carolina', lastMsg: 'Agendado para quinta-feira' },
    { id: '2', name: 'João Silva', lastMsg: 'Oi, como você está?' },
    // Adicione mais objetos conforme necessário
  ]);

  return (
    <View style={{ backgroundColor: '#F1F6F9', flex: 1 }}>
      <View style={[styles.container, { flex: 0 }]}>
        <TextInput
          placeholderTextColor={'gray'}
          placeholder='Buscar conversa'
          style={[
            styles.formInput,
            { width: '90%', backgroundColor: 'white', borderColor: 'gray', elevation: 6 },
          ]}
        />

        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingBottom:15, paddingLeft:10}}
          renderItem={({ item }) => (
            <ConversationComponent
              name={item.name}
              lastMsg={item.lastMsg}
              onPress={() => navigation.navigate('Conversation')}
            />
          )}
        />
      </View>
    </View>
  );
}
