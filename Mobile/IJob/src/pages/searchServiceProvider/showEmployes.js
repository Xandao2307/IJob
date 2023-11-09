import React from 'react'
import { View, ScrollView, StyleSheet, Linking } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { Header } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";


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
        <Header
        backgroundColor='#394867'
         leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          size:42,
          onPress:goBack
         }
       }
        centerComponent={{ text: 'Profionais Encontrados', style:{ alignSelf:'flex-start', width:'200%', color:'#F1F6F9', fontSize:25, fontWeight:'bold',}}}
        />
        <ScrollView style={{paddingTop:10}}>
          <Card containerStyle={{marginTop:15}}>
            <Card.Title style={{fontSize:24,fontWeight:'bold'}}>Manicure/Pedicure</Card.Title>
            <Card.Divider />
            <Text style={{fontSize:24, backgroundColor:'#D9D9D9', color:'#14274E',fontWeight:'bold',borderRadius:5, paddingLeft:5, marginBottom:12}}>
              Ana Maria Carolina
            </Text>
            <Text style={{ marginBottom: 10, fontSize:14}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula hendrerit lectus eleifend iaculis. Nam porta, odio eget rutrum porta, nisl leo rutrum nulla, at fringilla velit tellus vel sem. Maecenas fermentum purus et dolor interdum, nec egestas leo suscipit.
          </Text>
            <Button
            buttonStyle={[stylesCard.button, {backgroundColor:'#14274E',}]}
            titleStyle={{fontSize:24}}
            title="Detalhes"
            onPress={()=>{}}
          />
          </Card>

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