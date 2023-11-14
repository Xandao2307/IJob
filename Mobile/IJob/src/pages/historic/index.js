import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import ActiveWork from '../../components/activeWork'
import PastWork from '../../components/pastWork'
import { useNavigation } from '@react-navigation/native'

export default function HistoricPage() {
  const navigation = useNavigation()

  return (

    <View style={{backgroundColor:"#F1F6F9", flex:1}}>
      <View style = {[styles.container, {flex:0}]}>
       <Text style={[styles.formTitle,{fontSize:20, paddingBottom:0,marginTop:20, margin:0,marginLeft:20, alignSelf:'flex-start'}]}>Serviços ativos:</Text>
        <ActiveWork
          name='Ana Maria Carolina'
          profession='Manicure/Pedicure'
          date='30/10/2023'
          assessmentFn={()=>{navigation.navigate('Assessement')}}
          informationFn={()=>{}}
        />
        <PastWork
          name="Alexandre Souza Nunes"
          date="23/07/2002"
          assessmentFn={()=>{navigation.navigate('Assessement')}}
        />
      </View>
    </View>

  )
}