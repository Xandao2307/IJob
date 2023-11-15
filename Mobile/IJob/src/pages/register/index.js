import { View, Text, TextInput, Image , Pressable, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { useState } from 'react';
import { styles } from '../../styles/styles'
import { CheckBox } from '@rneui/themed';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from "@react-native-community/datetimepicker"
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../config/firebase.config'

export default function Register() {
  const [radioButtonIndex, setRadioButtonIndex] = useState(0);
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [cep, setCep] = useState('')
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [btnCreate, setBtnCreate] = useState('Criar Conta')
  
  function newUser() {

    const cpfIsValid = this.cpfField.isValid()
    if(!cpfIsValid) alert('Insira um CPF Válido')  
    else if (email ==='' || password === '' || rePassword === '' || !cpfIsValid) alert('Preencha todos os dados')
    else if (password !== rePassword) alert('As senhas devem ser iguais')
    else{
      radioButtonIndex==1 ? navigation.navigate('ServiceProvider') : navigation.navigate('Login')
      // createUserWithEmailAndPassword(auth,email,password)
      // .then((userCrendencial) =>{
      //   alert('O usuário foi criado')
      //   radioButtonIndex==1 ? navigation.navigate('ServiceProvider') : navigation.navigate('Login')
      // }).catch((error)=>{
      //   const errorMessage = error.message
      //   alert(errorMessage)
      //   navigation.navigate('Register')
      //   return
      // })
    }
  }

  const toggleDatepicker = () =>{
    setShowPicker(!showPicker)
  }

  const formatDate = (rawDate) =>{
    let date = new Date(rawDate)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
;
    return `${day}/${month}/${year}`
  }

  const onChangePicker = ( {type}, selectedDate) =>{
      if (type == 'set') {
          const currentDate = selectedDate
          setDate(currentDate)
          if (Platform.OS === 'android') {
            toggleDatepicker()
            setBirthdate(formatDate(currentDate))
          } else {
            
          }
      }else{
          toggleDatepicker()
      }
  }

  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Text style={[styles.formTitle,{color:'#111111', paddingBottom:-10, fontSize:36}]}>Escolha uma opção</Text>
      <View>
        <CheckBox
          checked={radioButtonIndex === 0}
          onPress={() => {
            setRadioButtonIndex(0)
            setBtnCreate('Criar Conta')
          }}
          uncheckedColor='#D9D9D9'
          checkedColor='#111111'
          checkedIcon="circle"
          uncheckedIcon="circle"
          title="Cliente" 
          containerStyle={{backgroundColor:'#F1F6F9', width:300,paddingBottom:-5}}
          textStyle={{fontSize:17}}
          size={20}
        />
        <CheckBox
          checked={radioButtonIndex === 1}
          onPress={() => {
            setRadioButtonIndex(1)
            setBtnCreate('Continuar Cadastro')
          }}
          uncheckedColor='#D9D9D9'
          checkedColor='#111111'
          checkedIcon="circle"
          uncheckedIcon="circle"
          title="Prestador de Serviço" 
          containerStyle={{backgroundColor:'#F1F6F9', width:300}}
          textStyle={{fontSize:17}}
          size={20}
        />
      </View>
      <TextInput 
        style={[styles.formInput,{height: 40}]} 
        placeholder='Nome'
        autoCapitalize='none'
        value={name}
        onChangeText={text => {setName(text)}}
      />
      <TextInputMask 
        style={[styles.formInput,{height: 40}]} 
        placeholder='CPF'
        keyboardType='number-pad'
        autoCapitalize='none'
        type='cpf'
        value={cpf}
        onChangeText={text=>{setCpf(text)}}
        ref={(ref)=> cpfField = ref}
      />
      
      <TextInputMask 
        style={[styles.formInput,{height: 40}]} 
        placeholder='CEP'
        keyboardType='number-pad'
        autoCapitalize='none'
        type='custom'
        value={cep}
        options={{mask:'99999-999'}}
        onChangeText={text=>{setCep(text)}}
      />

      <TextInput
        style={[styles.formInput,{height: 40}]}
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email'
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput 
      style={[styles.formInput,{height: 40}]} 
      placeholder='Senha'
      autoCapitalize='none'
      secureTextEntry
      autoComplete='password'
      value={password}
      onChangeText={setPassword}
      />
      
      <TextInput 
      style={[styles.formInput,{height: 40}]} 
      placeholder='Repita a Senha'
      autoCapitalize='none'
      secureTextEntry
      autoComplete='password'
      value={rePassword}
      onChangeText={setRePassword}
      />
      
      { showPicker &&(
          <DateTimePicker
          mode='date'
          display='spinner'
          value={date}
          onChange={onChangePicker}
          dateFormat='day month year'
          maximumDate={new Date(2024,12,31)}
          minimumDate={new Date(1900,12,31)}
          />
        )
      }

      <Pressable onPress={toggleDatepicker}>
        <TextInput 
        style={[styles.formInput,{height: 40 ,color:'#111111'}]} 
        placeholder='Data Nascimento'
        autoCapitalize='none'
        keyboardType='number-pad'
        autoComplete='birthdate-full'
        value={birthdate}
        editable={false}
      />
    </Pressable>
      <TouchableOpacity
       style={[styles.formButton, {backgroundColor:'#14274E'}]}
       onPress={newUser}
       >
        <Text  style={styles.textButton}>{btnCreate}</Text>
      </TouchableOpacity>

      <Pressable
        onPress={()=> navigation.navigate('Login')}
      >
        <Text
         style={styles.subButtonText}
         >Já tenho conta </Text>
      </Pressable>
    </View>
  )
}