import { View, Text, TextInput, Image , Pressable, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { styles } from '../../styles/styles'
import { useNavigation } from "@react-navigation/native";
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function userLogin() {
    alert('Bem vindo')
    signInWithEmailAndPassword(auth,email,password)
    .then((userCrendencial)=>{
      const user = userCrendencial.user
      navigation.navigate('Home')
    })
    .catch((error)=>{
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
      console.log(errorCode);
    })
   
  }

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
        value={email}
        onChangeText={setEmail}
        />
        <TextInput
        style={styles.formInput}
        placeholder='Informe a Senha'
        autoCapitalize='none'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />

        <TouchableOpacity
        onPress={userLogin}
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