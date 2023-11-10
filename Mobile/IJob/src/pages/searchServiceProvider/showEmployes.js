import React from 'react'
import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import HeaderComponent from "../../components/headerComponent";
import CardComponent from '../../components/cardComponent'


const openUrlButton = () =>{
     Linking.openURL('www.google.com.br')
}
export default function ShowEmployes() {
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack()
  }
  return (
      <View style={stylesCard.container}>
        <HeaderComponent
      title='Profissionais Encotrados'
    />
        <ScrollView style={{paddingTop:10}}>
         <CardComponent
            name='Ana Maria Carolina'
            profession='Manicure/Pedicure'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula hendrerit lectus eleifend iaculis. Nam porta, odio eget rutrum porta, nisl leo rutrum nulla, at fringilla velit tellus vel sem. Maecenas fermentum purus et dolor interdum, nec egestas leo suscipit.'
          />

        </ScrollView>
      </View>
  )
}

const stylesCard = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F6F9',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    button:{
        backgroundColor:'#394867',
        borderRadius:9.82177,
        borderRadius:10,
        alignItems:'center',
        width: 309.93,
        height: 46.93
    }
    });