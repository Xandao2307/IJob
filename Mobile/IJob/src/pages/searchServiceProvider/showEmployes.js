import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/headerComponent';
import CardComponent from '../../components/cardComponent';

export default function ShowEmployes() {
  const navigation = useNavigation();

  // Usando useState para armazenar a lista de profissionais
  const [employesData, setEmployesData] = useState([
    {
      id: '1',
      name: 'Ana Maria Carolina',
      profession: 'Manicure/Pedicure',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula hendrerit lectus eleifend iaculis. Nam porta, odio eget rutrum porta, nisl leo rutrum nulla, at fringilla velit tellus vel sem. Maecenas fermentum purus et dolor interdum, nec egestas leo suscipit.',
    },
    // Adicione mais objetos conforme necessário
  ]);

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
