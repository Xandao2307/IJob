import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import ActiveWork from '../../components/activeWork'
import PastWork from '../../components/pastWork'
import InformationWork from '../../components/informationWork'

import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { findAllServicesByUserId, findAllServicesByWorkerId } from '../../services/findAllServicesService'
import UserInstance from "../../constants/userInstance";
import { useEffect } from 'react'
import { Alert } from 'react-native'
import { updateSeConcluido } from '../../services/updateSeConcluidoService'

const fusoHorarioBrasilia = "America/Sao_Paulo";
export const formatDateLong = (dt)=>{
  const data = new Date(dt);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero
  const ano = data.getFullYear();

  const hora = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  const segundos = String(data.getSeconds()).padStart(2, '0');

  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

export const formatDateShort = (dt)=>{
  const data = new Date(dt);

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

export default function HistoricPage() {
  const navigation = useNavigation()
  const userLogged = new UserInstance()
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (userLogged.data.independent) {
      findAllServicesByWorkerId(userLogged.data.id)
      .then((result) => {
        setWorks(result)
        setIsLoading(false);

      })
      .catch((error)=>{
        console.error(error)
      })
    }
    else{
      findAllServicesByUserId(userLogged.data.id)
      .then((result) => {
        setWorks(result)
        setIsLoading(false);

      })
      .catch((error)=>{
        console.error(error)
      })
    }
    return () => {};
  }, [])

  const renderWorkComponent = ({ item }) => {
    if (userLogged.data.independent) {
      return (
        <InformationWork
          name={item.prestador.name}
          date={formatDateLong(item.dtInicio.toLocaleString("pt-BR", { timeZone: fusoHorarioBrasilia }))}
          avatarNameDataFn={() => {}}
          assessmentFn={() => {
            Alert.alert("Serviço Finalizado","Serviço Encerrado Obrigado!")
            updateSeConcluido(item.id, true)
          }}
          id= {item.id}
        />
      );
    }

    if (!item.seConcluido) {
      return (
        <ActiveWork
          name={item.prestador.name}
          profession={item.prestador.servicos ? "Sem serviços cadastrados" : (item.prestador.servicos.map((x)=> x.name)).join("; ")}
          date={formatDateLong(item.dtInicio.toLocaleString("pt-BR", { timeZone: fusoHorarioBrasilia }))}
          assessmentFn={() => Alert.alert("Aviso!","Só podera avaliar após a conclusão do serviço")}
          informationFn={() => {}}
        />
      );
    } else {
      return (
        <PastWork
          name={item.prestador.name}
          date={formatDateLong(item.dtInicio.toLocaleString("pt-BR", { timeZone: fusoHorarioBrasilia }))}
          avatarNameDataFn={() => {}}
          assessmentFn={() => navigation.navigate('Assessement', {servico:item})}
          id = {item.id}
        />
      );
    }
  };

  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={120} color="#14274E" />
        <Text>Carregando...</Text>
      </View>
    );
  }
  
  return (
    <View style={{ backgroundColor: '#F1F6F9', flex: 1 }}>
    <View style={[styles.container, { flex: 0 }]}>
      <Text
        style={[
          styles.formTitle,
          {
            fontSize: 20,
            paddingBottom: 0,
            marginTop: 20,
            margin: 0,
            marginLeft: 20,
            alignSelf: 'flex-start',
          },
        ]}
      >
        Histórico de Serviços:
      </Text>

      <FlatList
          data={works}
          contentContainerStyle={{paddingBottom:8, paddingLeft:5}}
          keyExtractor={(item) => item.id}
          renderItem={renderWorkComponent}
        />
      
    </View>
  </View>

  )
}