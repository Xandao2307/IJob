import { View, Text, TextInput, Image , Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import { useNavigation } from "@react-navigation/native";


export default function Login() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/logoIjob.png')}/>             
        </View>
        
        <Text style={styles.formTitle}>Entre com suas credenciais</Text>
        <Text style={styles.subText}>Para acessar insira Email e Senha de cadastro. </Text>
        <TextInput
        style={styles.formInput}
        placeholder='Informe o Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email'
        />
        <TextInput
        style={styles.formInput}
        placeholder='Informe a Senha'
        autoCapitalize='none'
        secureTextEntry
        />

        <TouchableOpacity
        onPress={()=> navigation.navigate('Home')}
        style={styles.formButton}>
           <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <Pressable
          onPress={()=> navigation.navigate('Register')}
        >
            <Text style={styles.subButtonText}>Cadastre-se</Text>
        </Pressable>
    </View>
  )
}