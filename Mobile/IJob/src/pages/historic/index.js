import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import ActiveWork from '../../components/activeWork'
import PastWork from '../../components/pastWork'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList } from 'react-native'

export default function HistoricPage() {
  const navigation = useNavigation()
  const [works, setWorks] = useState([
    {
      id: '1',
      name: 'Ana Maria Carolina',
      profession: 'Manicure/Pedicure',
      date: '30/10/2023',
      isActive: true,
    },
    {
      id: '2',
      name: 'Alexandre Souza Nunes',
      profession: 'Programador',
      date: '23/07/2002',
      isActive: false,
    },
    // Adicione mais objetos conforme necessário
  ]);

  const renderWorkComponent = ({ item }) => {
    if (item.isActive) {
      return (
        <ActiveWork
          name={item.name}
          profession={item.profession}
          date={item.date}
          assessmentFn={() => navigation.navigate('Assessement')}
          informationFn={() => {}}
        />
      );
    } else {
      return (
        <PastWork
          name={item.name}
          date={item.date}
          avatarNameDataFn={() => {}}
          assessmentFn={() => navigation.navigate('Assessement')}
        />
      );
    }
  };
  
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