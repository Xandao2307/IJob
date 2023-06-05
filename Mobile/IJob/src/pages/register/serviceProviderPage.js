import { View, Text , TouchableOpacity, Pressable} from 'react-native'
import React, {useState} from 'react'
import { styles } from '../../styles/styles'
import { CheckBox } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";


export default function ServiceProviderPage() {

    const [checkedManicure, setCheckedManicure] = useState(false)
    const [checkedLimpeza, setCheckedLimpeza] = useState(false)
    const [checkedComputador, setCheckedComputador] = useState(false)
    const [checkedCarreto, setCheckedCarreto] = useState(false)
    const [checkedMassagista, setCheckedMassagista] = useState(false)  
    const [checkedMontador, setCheckedMontador] = useState(false)
    const [checkedEncanador, setCheckedEncanador] = useState(false)
    const [checkedPedreiro, setCheckedPedreiro] = useState(false)
    const [checkedEletricista, setCheckedEletricista] = useState(false)
    const [checkedPintor, setCheckedPintor] = useState(false)
    const navigation = useNavigation()

    const toggleCheckbox = (checked, setChecked) => setChecked(!checked)

  return (
    <View style={styles.container}>
        <Text style={[styles.formTitle,{color:'#111111', fontSize:28, paddingBottom: 10}]}>Serviços disponibilizados:</Text>

        <View style={styles.containerRegisterServiceProvider}>
            <CheckBox
                checked={checkedManicure}
                onPress={ ()=>toggleCheckbox(checkedManicure,setCheckedManicure)}
                checkedIcon="square"
                uncheckedIcon="square"
                checkedColor='#111111'
                uncheckedColor='#D9D9D9'
                title="Manicure"
                textStyle={{fontSize:17}}
                size={20}
            />
            <CheckBox
                checked={checkedLimpeza}
                onPress={ ()=>toggleCheckbox(checkedLimpeza,setCheckedLimpeza)}
                checkedIcon="square"
                uncheckedIcon="square"
                checkedColor='#111111'
                uncheckedColor='#D9D9D9'
                title="Serviço de limpeza"
                textStyle={{fontSize:17}}
                size={20}
             />
            <CheckBox
                checked={checkedComputador}
                onPress={ ()=>toggleCheckbox(checkedComputador,setCheckedComputador)}
                checkedIcon="square"
                uncheckedIcon="square"
                checkedColor='#111111'
                uncheckedColor='#D9D9D9'
                title="Manutenção de Computadores"
                textStyle={{fontSize:17}}
                size={20}
            />
            <CheckBox
                checked={checkedCarreto}
                onPress={ ()=>toggleCheckbox(checkedCarreto,setCheckedCarreto)}
                checkedIcon="square"
                uncheckedIcon="square"
                checkedColor='#111111'
                uncheckedColor='#D9D9D9'
                title="Carretos (Transporte de móveis)"
                textStyle={{fontSize:17}}
                size={20}
            />
            <CheckBox
                checked={checkedMassagista}
                onPress={ ()=>toggleCheckbox(checkedMassagista,setCheckedMassagista)}
                checkedIcon="square"
                uncheckedIcon="square"
                checkedColor='#111111'
                uncheckedColor='#D9D9D9'
                title="Massagista"
                textStyle={{fontSize:17}}
                size={20}
            />

        </View>
        <View style={styles.containerRegisterServiceProvider}>
            <CheckBox
                    checked={checkedMontador}
                    onPress={ ()=>toggleCheckbox(checkedMontador,setCheckedMontador)}
                    checkedIcon="square"
                    uncheckedIcon="square"
                    checkedColor='#111111'
                    uncheckedColor='#D9D9D9'
                    title="Montador de Imóveis"
                    textStyle={{fontSize:17}}
                    size={20}
                />
             <CheckBox
                    checked={checkedEncanador}
                    onPress={ ()=>toggleCheckbox(checkedEncanador,setCheckedEncanador)}
                    checkedIcon="square"
                    uncheckedIcon="square"
                    checkedColor='#111111'
                    uncheckedColor='#D9D9D9'
                    title="Encanador (Reparos Hidráulicos)"
                    textStyle={{fontSize:17}}
                    size={20}
                />
             <CheckBox
                    checked={checkedPedreiro}
                    onPress={ ()=>toggleCheckbox(checkedPedreiro,setCheckedPedreiro)}
                    checkedIcon="square"
                    uncheckedIcon="square"
                    checkedColor='#111111'
                    uncheckedColor='#D9D9D9'
                    title="Pedreiro"
                    textStyle={{fontSize:17}}
                    size={20}
                />
             <CheckBox
                    checked={checkedEletricista}
                    onPress={ ()=>toggleCheckbox(checkedEletricista,setCheckedEletricista)}
                    checkedIcon="square"
                    uncheckedIcon="square"
                    checkedColor='#111111'
                    uncheckedColor='#D9D9D9'
                    title="Eletricista (Reparos Elétricos)"
                    textStyle={{fontSize:17}}
                    size={20}
                />
             <CheckBox
                    checked={checkedPintor}
                    onPress={ ()=>toggleCheckbox(checkedPintor,setCheckedPintor)}
                    checkedIcon="square"
                    uncheckedIcon="square"
                    checkedColor='#111111'
                    uncheckedColor='#D9D9D9'
                    title="Pintor"
                    textStyle={{fontSize:17}}
                    size={20}
                />
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={[styles.formButton, {backgroundColor:'#14274E'}]}>
            <Text style={styles.textButton}>Finalizar</Text>
        </TouchableOpacity>

        <Pressable onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.subButtonText}>Cadastrar serviços depois</Text>
        </Pressable>

    </View>            

  )
}