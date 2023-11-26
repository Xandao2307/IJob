import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/headerComponent';
import CardComponent from '../../components/cardComponent';
import { useEffect } from 'react';
import { findAll } from "../../services/findAllIndependent";
export default function ShowEmployes() {
  const navigation = useNavigation();

  // Usando useState para armazenar a lista de profissionais
  const [employesData, setEmployesData] = useState([
    // Adicione mais objetos conforme necessário
  ]);
  useEffect(() => {

    findAll()
      .then((independets) => {
        setEmployesData(independets)
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
              profession={item.profession}
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
