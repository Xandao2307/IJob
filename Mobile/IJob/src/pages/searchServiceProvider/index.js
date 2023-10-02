import { View, Text, Pressable,Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from "../../styles/styles"
import { useNavigation } from "@react-navigation/native";

export default function SearchServiceProviderPage() {
  const navigation = useNavigation()

  return (
    <View style = {styles.container}>
      <Pressable onPress={()=>{navigation.navigate('ShowEmployes')}}>
        <View style={[styles.logoContainer,{alignSelf:'center', paddingBottom:'10%'}]}>
              <Image style={styles.imageInitial} source={require('../../assets/HomeRepairing.png')}/>             
        </View>
        <Text style={[styles.formTitle,{alignSelf:'center',fontSize:20}]}>Clique Aqui para ver os profissionais</Text>
      </Pressable>
    </View>
  )
}