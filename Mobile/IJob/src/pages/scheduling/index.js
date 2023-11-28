import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { useState } from 'react'
import HeaderComponent from "../../components/headerComponent";
import { TouchableOpacity } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker"
import { Pressable } from 'react-native'

export default function Scheduling() {
  const [showPicker, setShowPicker] = useState(false)
  const [daySelected, setDaySelected] = useState('');
  const [dateAndTime, setDateAndTime] = useState('')
  const [date, setDate] = useState(new Date())

  const toggleDatepicker = () => setShowPicker(!showPicker)
  
  const formatDate = (rawDate) =>{
    let date = new Date(rawDate)
    let hora = date.getHours();
    let minuto = date.getMinutes();
    return `${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}`
  }

  const onChangePicker = ( {type}, selectedDate) =>{
      if (type == 'set') {
          const currentDate = selectedDate
          setDate(currentDate)
          if (Platform.OS === 'android') {
            toggleDatepicker()
            setDateAndTime(formatDate(currentDate))
          } 
          else setDateAndTime(formatDate(currentDate))
          
      }
      else toggleDatepicker()
  }

  LocaleConfig.locales['br']={
    monthNames:[
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort:[
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Maio",
      "jun",
      "jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    hoje: "Hoje"
  }

  LocaleConfig.defaultLocale = 'br'

  return (
    <View style={{backgroundColor:'#F1F6F9', flex:1}}> 
    <HeaderComponent
      title='Detalhes do Prestador'
    />
      <View style = {[styles.container, {flex:0, marginTop:30, backgroundColor:'#F1F6F9'}]}>
        <Calendar
          onDayPress={day => {
            setDaySelected(day.dateString);
          }}
          markedDates={{
            [daySelected]: {selected: true, disableTouchEvent: true}
          }}
          style={{
            borderRadius:8,
            height: 362,
            width:330,
            elevation:5
          }}
          theme={{
            textSectionTitleColor: 'black',
            arrowColor:'#394867',
            dayTextColor:'#444343',
            textDayFontSize:18,
            selectedDotColor:'#98A8C7',
            selectedDayBackgroundColor:'#98A8C7',
            selectedDayTextColor:'#444343',
            textMonthFontSize:18,
          }}
        />

        <Text style={{fontSize:18, paddingBottom:4, textAlign:'left',fontWeight:'bold', color:'#394867', alignSelf:'flex-start', marginLeft:30,marginTop:50}}>Agende o Horário:</Text>
        
        { showPicker &&(
          <DateTimePicker
          mode='time'
          display='default'
          value={date}
          onChange={onChangePicker}
          />
        )
      }

        <Pressable onPress={toggleDatepicker}>
          <TextInput 
          style={[styles.formInput,{height: 40, color:'black', width:330, fontSize:19, fontWeight:'bold'}]} 
        
          placeholder='Horário do serviço'
          value={dateAndTime}
          editable={false}/>
        </Pressable>

        <TouchableOpacity style={[styles.formButton, {backgroundColor:'#14274E', elevation:5 , marginBottom:0, marginTop:40, width:330}]}>
            <Text style={styles.textButton}>Solicitar Agendamento</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}
