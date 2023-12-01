import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Card, Button } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";

export default function cardComponent(props){

  const navigation = useNavigation()
  return (
    <View>
      <Card containerStyle={{marginTop:15, elevation:5 }}>
        <Card.Title style={{fontSize:24,fontWeight:'bold'}}>{props.profession}</Card.Title>
        <Card.Divider />
        <Text style={{fontSize:24, backgroundColor:'#F5F5F5', color:'#14274E',fontWeight:'bold',borderRadius:5, paddingLeft:5, marginBottom:12}}>
          {props.name}
        </Text>
        <Text style={{ marginBottom: 10, fontSize:14}}>
          {props.description}
        </Text>
        <Button
            buttonStyle={[styles.button, {backgroundColor:'#14274E',}]}
            titleStyle={{fontSize:24}}
            title="Detalhes"
            onPress={() => navigation.navigate("Details",{id: props.id, worker: props.worker})}
          />
      </Card>
    </View>
    
  )
}
const styles = StyleSheet.create({
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
