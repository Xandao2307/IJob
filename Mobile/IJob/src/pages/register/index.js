import { View, Text, TextInput, Image , Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import { CheckBox } from '@rneui/themed';
import { TextInputMask } from 'react-native-masked-text';

export default function Register() {
  const [selectedIndex, setIndex] = React.useState(0);
  const [birthdate, setBirthdate] = React.useState(0)
  const [cpf, setCpf] = React.useState('')
  return (
    <View style={styles.container}>
      <Text style={[styles.formTitle,{color:'#111111', paddingBottom:-10, fontSize:36}]}>Escolha uma opção</Text>
      <View>
        <CheckBox
          checked={selectedIndex === 0}
          onPress={() => setIndex(0)}
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
          checked={selectedIndex === 1}
          onPress={() => setIndex(1)}
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
      />
      <TextInputMask 
        style={[styles.formInput,{height: 40}]} 
        placeholder='CPF'
        keyboardType='number-pad'
        autoCapitalize='none'
        type='cpf'
        value={cpf}
        onChangeText={text=>{setCpf(text)}}
      />
        
      <TextInput
        style={[styles.formInput,{height: 40}]}
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email'
        
      />
      
      <TextInput 
      style={[styles.formInput,{height: 40}]} 
      placeholder='Senha'
      autoCapitalize='none'
      secureTextEntry
      autoComplete='password'
      />
      <TextInput 
      style={[styles.formInput,{height: 40}]} 
      placeholder='Repita a Senha'
      autoCapitalize='none'
      secureTextEntry
      autoComplete='password'

      />
      
      <TextInput 
      style={[styles.formInput,{height: 40}]} 
      placeholder='Data Nascimento'
      autoCapitalize='none'
      keyboardType='number-pad'
      autoComplete='birthdate-full'
    />

      <TouchableOpacity style={[styles.formButton, {backgroundColor:'#14274E'}]}>
           <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>

        <Pressable>
            <Text style={styles.subButtonText}>Já tenho conta</Text>
        </Pressable>
    </View>
  )
}