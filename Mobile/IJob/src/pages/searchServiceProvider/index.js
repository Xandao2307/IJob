import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from "../../styles/styles"
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Alert } from 'react-native';

export default function SearchServiceProviderPage() {
  const navigation = useNavigation()

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Montador de Imóveis', value: 'Montador'},
    {label: 'Encanador (Reparos Hidráulicos)', value: 'Encanador'},
    {label: 'Pedreiro', value: 'Pedreiro'},
    {label: 'Eletricista (Reparos Elétricos)', value: 'Eletricista'},
    {label: 'Pintor', value: 'Pintor'},
    {label: 'Manicure', value: 'Manicure'},
    {label: 'Serviço de limpeza', value: 'Limpeza'},
    {label: 'Manutenção de Computadores', value: 'Manutenção de Computadores'},
    {label: 'Carretos (Transporte de móveis)', value: 'Carretos'},
    {label: 'Massagista', value: 'Massagista'},
  ])

  const findWorkers = () =>{
    if(value == null) Alert.alert("Erro","Selecione o tipo de prestador de serviço")
    else navigation.navigate('ShowEmployes')
  }

  return (
      <View style = {styles.container}>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder='Selecione aqui profissional desejado'
        style={[styles.formInput,{width:'95%', backgroundColor:'white', borderColor:'gray', elevation:10}]}/>

        <TouchableOpacity onPress={findWorkers} style={styles.formButton}>
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>

        <View style={[styles.logoContainer,{alignSelf:'center', paddingBottom:'10%'}]}>
          <Image style={styles.imageInitial} source={require('../../assets/HomeRepairing.png')}/>             
        </View>

          <Text style={[styles.formTitle,{alignSelf:'center',fontSize:20}]}>Encontre aqui o profissional para sua necessidade</Text>
      </View>
  )
}