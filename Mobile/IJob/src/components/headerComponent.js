import { View } from 'react-native'
import React from 'react'
import { Header } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";

export default function headerComponent(props) {
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()
  return (
    <View>
        <Header
            backgroundColor='#394867'
            leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            size:42,
            onPress:goBack
        }
       }
        centerComponent={{ text: props.title, style:{ alignSelf:'flex-start', width:'200%', color:'#F1F6F9', fontSize:25, fontWeight:'bold',}}}
        />
    </View>
  )
}