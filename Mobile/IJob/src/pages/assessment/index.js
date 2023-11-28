import React, { useState } from 'react';
import { View, Text } from 'react-native';
import WorkerNameDate from '../../components/workerNameDate';
import HeaderComponent from '../../components/headerComponent';
import { AirbnbRating } from 'react-native-ratings';
import { TextInput, TouchableOpacity } from 'react-native';
import { formatDate } from '../historic';
import { styles } from '../../styles/styles';
import { Alert } from 'react-native';
import { findAssementByServicoId, sendAssementService } from '../../services/sendAssementService';

export default function Assessement({ route, navigation }) {
  const { servico } = route.params;
  const [rating, setRating] = useState(3); 
  const [comment, setComment] = useState(''); 
  const sendAssement =  () => {
    let alreadyEvaluated  = false;

    if(!comment) {
      Alert.alert("Atenção!","Por favor inserir um comentário sobre o serviço")
      return
    }
    findAssementByServicoId(servico.prestadorId,servico.id)
    .then((res)=>{
      if(res.length){
        Alert.alert('Atenção','Você ja avaliou esse serviço')
        navigation.navigate('Home')
        alreadyEvaluated = true;
      }

    })
    .catch((error)=> console.error(error))

    const avaliacao = {
      nota:rating,
      comentario:comment,
      dtAvaliacao:Date.now(),
      agendaServico:{
        id: servico.id,
        prestadorId: servico.prestadorId,
        usuarioId: servico.usuarioId,
        dtInicio: servico.dtInicio,
        seConcluido: servico.seConcluido,  
      }
    }

    if(alreadyEvaluated){
      sendAssementService(avaliacao)
      .then((res) =>{
        Alert.alert("Concluido","Avaliação enviada, Obrigado!")
        navigation.navigate('Home')
      })
      .catch((error)=> console.error(error))
    }
  };

  return (
    <View style={{ backgroundColor: '#F1F6F9', flex: 1 }}>
      <HeaderComponent title="Qual a sua avaliação" />
      <View style={[styles.container, { flex: 0, marginTop: 50 }]}>
        <View style={{ marginBottom: 30, width: 330 }}>
          <Text style={{ fontSize: 18, paddingBottom: 4, textAlign: 'left', fontWeight: 'bold', color: '#14274E' }}>
            Avalie o serviço contratado e nos ajude a classificar nossos prestadores:
          </Text>
        </View>
        <View style={{ marginLeft: -70 }}>
          <WorkerNameDate name={servico.prestador.name} date={formatDate(servico.dtInicio)} />
        </View>
        <View style={{ marginTop: 35, marginBottom: 35 }}>
          <AirbnbRating
            defaultRating={rating}
            size={56}
            ratingBackgroundColor="#c8c7c8"
            selectedColor="#14274E"
            unSelectedColor="#98A8C7"
            showRating={false}
            onFinishRating={(value) => setRating(value)}
          />
        </View>

        <Text style={{ fontSize: 18, paddingBottom: 4, textAlign: 'left', fontWeight: 'bold', color: '#14274E', alignSelf: 'flex-start', marginLeft: 30 }}>
          Digite um comentário:
        </Text>

        <TextInput
          style={[styles.formInput, { backgroundColor: 'white', height: 150, width: 330, textAlignVertical: 'top' }]}
          keyboardType="default"
          autoCapitalize="none"
          multiline={true}
          placeholder="Mensagem"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />

        <TouchableOpacity  style={[styles.formButton, { backgroundColor: '#14274E', elevation: 5, marginBottom: 0, marginTop: 70, width: 330 }]} onPress={sendAssement}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
