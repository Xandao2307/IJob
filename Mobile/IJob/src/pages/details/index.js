import { View, Text, FlatList, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/styles'
import HeaderComponent from "../../components/headerComponent";
import { AirbnbRating,  Button, Card, Rating } from '@rneui/base';
import AvatarComponent from '../../components/avatarComponent'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useEffect } from 'react';
import { findUser } from '../../services/findUser';

export default function Details({ route, navigation }) {
  const { id } = route.params
  const [user, setUser] = useState({})
  const [imageList, setImageList] = useState([]);
  const [services, setServices] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    findUser(id)
    .then((result)=>{
      setUser(result)
      console.log();
      let imgs = result.imagens.map((img) => img.url)
      let services = (result.servicos.map((x) => x.name)).join("; ")
      setImageList(imgs)
      setServices(services)
      setIsLoading(false);
    })
    .catch((error)=>{
      console.error(error)
    })
    return () => {};
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={120} color="#14274E" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  const AvaliacoesCard = () => {
    // Exemplo de dados de avaliação
    const avaliacoes = [
      {
        nome: 'Vanila',
        data: '23/07/2023',
        avaliacao: 4,
        comentario: 'Atrasou na chegada mas o serviço é excelente.',
      },  {
        nome: 'Vanila',
        data: '23/07/2023',
        avaliacao: 4,
        comentario: 'Atrasou na chegada mas o serviço é excelente.',
      },
      // Adicione mais avaliações conforme necessário
    ];
  
    return (
      <Card containerStyle={{ width: 320, elevation: 5, backgroundColor: 'white', borderRadius: 10, marginBottom: 20 }}>
        <Card.Title style={{ alignSelf: 'flex-start', fontSize: 18, color: '#14274E' }}>Avaliações:</Card.Title>
        <Card.Divider />

        {avaliacoes.map((item, index) => (
          <View key={index}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, color: '#14274E', marginRight: 6 }}>{item.nome}</Text>
              <Text style={{ fontSize: 16, color: '#14274E' }}>{item.data}</Text>
              <AirbnbRating size={14} showRating={false} isDisabled={true} defaultRating={item.avaliacao} count={5} />
            </View>
            <Text style={{ fontSize: 14, color: '#14274E' }}>{item.comentario}</Text>
            <Card.Divider />

          </View>
        ))}
      </Card>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F1F6F9' }}>
      <HeaderComponent title="Detalhes do Prestador" />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={[styles.container, { marginTop: 30, backgroundColor: '#F1F6F9' }]}>
            <View style={{ flexDirection: 'row' }}>
              <AvatarComponent size={140} />
              <View style={{ flexDirection: 'column', paddingTop: 15 }}>
                <Text style={[styles.formTitle, { fontSize: 18, paddingBottom: 12, margin: 0, marginLeft: 0, alignSelf: 'flex-start' }]}>{user.name}</Text>
                <Text style={[styles.formTitle, { fontSize: 18, paddingBottom: 0, margin: 0, marginLeft: 0, alignSelf: 'flex-start' }]}>Serviços disponíveis:</Text>
                <Text style={{ fontSize: 16, color: '#14274E' }}>{services}</Text>
                <TouchableOpacity
                  style={[styles.formButton, { width: 138, elevation: 5, height: 30, padding: 0, paddingTop: 3, alignSelf: 'flex-end' }]}
                >
                  <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }} onPress={() => Alert.alert("Descrição", user.description)}>Mais Informações</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Card containerStyle={{ width: 320, elevation: 5, backgroundColor: 'white', borderRadius: 10 }}>
              <Card.Title style={{ alignSelf: 'flex-start', fontSize: 18, fontWeight: 'bold', color: '#14274E' }}>
                Vitrine do Prestador:
              </Card.Title>
              <FlatList
                data={imageList}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                renderItem={({ item }) => (
                  <Image
                    style={{ height: 150, width: 160, borderRadius: 8, marginVertical: 5, marginRight: 10 }}
                    source={{ uri: item }}
                  />
                )}
              />
            </Card>

            <AvaliacoesCard />

            <TouchableOpacity onPress={() => navigation.navigate('Conversation')} style={[styles.formButton, { backgroundColor: '#14274E', elevation: 5, marginBottom: 0 }]}>
              <Text style={styles.textButton}>Iniciar Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Scheduling')} style={[styles.formButton, { backgroundColor: '#14274E', elevation: 10 }]}>
              <Text style={styles.textButton}>Agendar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}