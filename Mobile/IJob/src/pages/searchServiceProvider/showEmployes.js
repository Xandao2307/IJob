import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/headerComponent';
import CardComponent from '../../components/cardComponent';
import { useEffect } from 'react';
import { findAll } from "../../services/findAllIndependent";
import { styles } from '../../styles/styles';
import { Text, ActivityIndicator } from 'react-native';

export default function ShowEmployes({ route, navigation }) {
  const { id } = route.params
  const [employesData, setEmployesData] = useState([])
  const [services, setServices] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const indentifyService = ()=>{
    switch (id) {
      case '1':
        setServices('Manicure')
        break;
    case '2':
        setServices('Serviço de Limpeza')
        break;
    case '3':
        setServices('Manutenção de Computadores')
        break;
    case '4':
        setServices('Carretos')
        break;
    case '5':
        setServices('Massagista')
        break;
    case '6':
        setServices('Montador de Móveis')
        break;
    case '7':
        setServices('Encanador')
        break;
    case '8':
        setServices('Pedreiro')
        break;
    case '9':
        setServices('Eletricista')
        break;
    case '10':
      setServices('Pintor')
      break;
      
    }
  }

  useEffect(() => {
    findAll(id)
      .then((independets) => {
        setEmployesData(independets)
        indentifyService()
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro durante o login:', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      })
    return () => {
    }
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={120} color="#14274E" />
        <Text>Carregando...</Text>
      </View>
    );
  }
  
  if (employesData.length == 0) {
    return (
      <View style={stylesCard.container}>
        <HeaderComponent title='Profissionais Encotrados' />
        <View style={{ flex: 1 }}>
          <Text style={[{fontSize:26, fontWeight:'800', color:'#14274E', textAlign:'center',marginTop:"50%"}]}>Ops infelizmente não encontramos nenhum prestador na sua localidade 😕</Text>  
        </View>
      </View>
    );
  }

  return (
    <View style={stylesCard.container}>
      <HeaderComponent title='Profissionais Encotrados' />
      <View style={{ flex: 1 }}>
        <FlatList
          data={employesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardComponent
              name={item.name}
              profession={services}
              description={item.description}
              id={item.id}
            />
          )}
        />
      </View>
    </View>
  );
}

const stylesCard = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#394867',
    borderRadius: 9.82177,
    borderRadius: 10,
    alignItems: 'center',
    width: 309.93,
    height: 46.93,
  },
});
