import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import  WorkerNameDate  from "../../components/workerNameDate";
import HeaderComponent from '../../components/headerComponent'
import { AirbnbRating } from 'react-native-ratings';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function Assessement() {
  return (
    <View style={{backgroundColor:"#F1F6F9", flex:1}}> 
        <HeaderComponent title="Qual a sua avaliação"/>
        <View style={[styles.container, {flex:0, marginTop:50}]}>
          <View style={{marginBottom:30, width:330}}>
          <Text style={{fontSize:18, paddingBottom:4, textAlign:'left',fontWeight:'bold', color:'#14274E',}}>Avalie o serviço contratado e nos ajude a classificar nosso prestadores:</Text>
          </View>
          <View style={{marginLeft:-70}}>
            <WorkerNameDate
                name="Alexandre"
                date='23/07/2002'
            />
          </View>
          <View style={{marginTop:35, marginBottom:35}}>
          <AirbnbRating
            defaultRating={5}
            size={56}
            ratingBackgroundColor='#c8c7c8'
            selectedColor='#14274E'
            unSelectedColor='#98A8C7'
            showRating={false}
            onFinishRating={()=>{}}
          />
          </View>

          <Text style={{fontSize:18, paddingBottom:4, textAlign:'left',fontWeight:'bold', color:'#14274E', alignSelf:'flex-start', marginLeft:30}}>Digite um comentário:</Text>
       
          <TextInput
            style={[styles.formInput,{backgroundColor:"white", height:150, width:330,textAlignVertical:'top'}]}
            keyboardType='default'
            autoCapitalize='none'
            multiline={true}
            placeholder='Mensagem'
            styles={{elevation:5}}
          />

          <TouchableOpacity style={[styles.formButton, {backgroundColor:'#14274E', elevation:5 , marginBottom:0, marginTop:70, width:330}]}>
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
