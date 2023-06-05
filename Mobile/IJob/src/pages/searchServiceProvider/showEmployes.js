import React from 'react'
import { View, ScrollView, StyleSheet, Image, Linking } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { FontAwesome } from "@expo/vector-icons";


const openUrlButton = () =>{
     Linking.openURL('www.google.com.br')
}
export default function ShowEmployes() {
  return (
<>
      <View style={styles.container}>
        <ScrollView>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.name}>Jorge Henrique</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.image}
            source={require('../../assets/jorge.jpg')}
          />
          <Text style={{ marginBottom: 10 ,fontSize:16}}>
            Sou Jorge sou pintor a 15 anos, faço todos os tipos de pinturas menos grafiato.
          </Text>
          <Button
            icon={
              <FontAwesome
                name="whatsapp"
                color="#ffffff"
                style={{paddingRight:2}}
                size={20}
              />
            }
            buttonStyle={styles.button}
            title="Contate-me"
            onPress={()=>{Linking.openURL('https://api.whatsapp.com/send?phone=5513997318146&text=Oi%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20serviços')}}
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.name} >Anna Beatriz</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.image}
            source={require('../../assets/anna.jpg')}
          />
          <Text style={{ marginBottom: 10 ,fontSize:16 }}>
            Sou cabeleleira profissional a 9 anos, Venha conhecer a "Anna Coiffeur"
          </Text>
          <Button
            icon={
              <FontAwesome
                name="whatsapp"
                color="#ffffff"
                style={{paddingRight:2}}
                size={20}
              />
            }
            buttonStyle={styles.button}
            title="Contate-me"
            onPress={()=>{Linking.openURL('https://api.whatsapp.com/send?phone=5513997318146&text=Oi%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20serviços')}}

          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.name}>Fábio Bravo</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.image}
            source={require('../../assets/fabio.jpg')}
          />
          <Text style={{ marginBottom: 10 ,fontSize:16}}>
            Sou advogado e econtador, venha declara seu imposto de renda comigo, 
            condições especiais quem chamar por esse numero.
          </Text>
          <Button
            icon={
              <FontAwesome
                name="whatsapp"
                color="#ffffff"
                style={{paddingRight:2}}
                size={20}
              />
            }
            buttonStyle={styles.button}
            title="Contate-me"
            onPress={()=>{Linking.openURL('https://api.whatsapp.com/send?phone=5513997318146&text=Oi%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20serviços')}}

          />
        </Card>

        </ScrollView>
      </View>
  </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F6F9',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 300,
      height: 300,
      alignSelf:'center',
    },
    name: {
      fontSize: 20,
    },
    card:{
        marginTop:'12%',
        borderRadius:6,
        alignItems:'center'
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