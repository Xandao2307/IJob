import { View, Text, FlatList, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/styles'
import HeaderComponent from "../../components/headerComponent";
import { AirbnbRating, Button, Card, Rating } from '@rneui/base';
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
      .then((result) => {
        setUser(result)
        setImageList(result.imagens.map((img) => img.url))
        setServices((result.servicos.map((x) => x.name)).join("; "))
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error)
      })
    return () => { };
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={120} color="#14274E" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: '#F1F6F9' }}>
      <HeaderComponent
        title='Detalhes do Prestador'
      />
      <View style={[styles.container, { flex: 0, marginTop: 30, backgroundColor: '#F1F6F9' }]}>
        <View style={{ flexDirection: 'row' }}>
          <AvatarComponent
            size={140}
          />
          <View style={{ flexDirection: 'column', paddingTop: 15 }}>
            <Text style={[styles.formTitle, { fontSize: 18, paddingBottom: 12, margin: 0, marginLeft: 0, alignSelf: "flex-start" }]}>{user.name}</Text>
            <Text style={[styles.formTitle, { fontSize: 18, paddingBottom: 0, margin: 0, marginLeft: 0, alignSelf: 'flex-start' }]}>Serviços disponíveis:</Text>
            <Text style={{ fontSize: 16, color: '#14274E' }}>{services}</Text>
            <TouchableOpacity
              style={[styles.formButton, { width: 138, elevation: 5, height: 30, padding: 0, paddingTop: 3, alignSelf: 'flex-end' }]}
            >
              <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }} onPress={() => Alert.alert("Descrição", user.description)} >Mais Informações</Text>
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

        <Card containerStyle={{ width: 320, elevation: 5, backgroundColor: 'white', borderRadius: 10 }}>
          <Card.Title style={{ alignSelf: 'flex-start', fontSize: 18, color: '#14274E' }}>Avaliações:</Card.Title>
          <View>
            <Card.Divider />

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 16, color: '#14274E', marginRight: 6 }}>Vanila</Text>
              <Text style={{ fontSize: 16, color: '#14274E' }}>23/07/2023</Text>

              <AirbnbRating
                size={14}
                showRating={false}
                isDisabled={true}
                defaultRating={4}
                count={5}
              />
            </View>
            <Text style={{ fontSize: 14, color: '#14274E' }}>Atrasou na chegada mas o serviço é excelente.</Text>

          </View>
        </Card>

        <TouchableOpacity onPress={() => navigation.navigate('Conversation', {
          user: {
            id,
            name: user.name
          }
        })}
          style={[styles.formButton,
          { backgroundColor: '#14274E', elevation: 5, marginBottom: 0 }
          ]}>
          <Text style={styles.textButton}>Iniciar Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Scheduling')} style={[styles.formButton, { backgroundColor: '#14274E', elevation: 10 }]}>
          <Text style={styles.textButton}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

