import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from "../../styles/styles"
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Alert } from 'react-native';
import UserInstace from "../../constants/userInstance";

export default function SearchServiceProviderPage() {
  const navigation = useNavigation()

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const userLogged = new UserInstace()
  const [items, setItems] = useState([
    {label: 'Manicure', value: '1'},
    {label: 'Serviço de limpeza', value: '2'},
    {label: 'Manutenção de Computadores', value: '3'},
    {label: 'Carretos (Transporte de móveis)', value: '4'},
    {label: 'Massagista', value: '5'},
    {label: 'Montador de Imóveis', value: '6'},
    {label: 'Encanador (Reparos Hidráulicos)', value: '7'},
    {label: 'Pedreiro', value: '8'},
    {label: 'Eletricista (Reparos Elétricos)', value: '9'},
    {label: 'Pintor', value: '10'},
  ])
  
  const findWorkers = () =>{
    if(value == null) Alert.alert("Erro","Selecione o tipo de prestador de serviço")
    else navigation.navigate('ShowEmployes', {id: value})
  }

  if (userLogged.data.independent) {
    return (
      <View style={styles.container}>
        <Text style={[{fontSize:27, fontWeight:'800', color:'#14274E', textAlign:'center',}]}>Opss você é prestador de serviço. Essa página só é disponível para nossos clientes 😕</Text>  
      </View>
    );
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