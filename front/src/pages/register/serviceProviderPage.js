import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/styles'
import { CheckBox } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '../../services/uploadImagesService';
import { saveImages } from '../../services/saveImagesService';
import { createUser } from '../../services/createUserService';
import UserInstance from '../../constants/userInstance';


export default function ServiceProviderPage({ route, navigation }) {

    const { data } = route.params

    const [image, setImage] = useState(null);
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
    const [descricao, setDescricao] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toggleCheckbox = (checked, setChecked) => setChecked(!checked)

    const getServices = () => {
        let services = []

        if (checkedManicure) services.push({ name: "Manicure", codigo: '1' })
        if (checkedLimpeza) services.push({ name: "Serviço de Limpeza", codigo: '2' })
        if (checkedComputador) services.push({ name: "Manutenção de Computadores", codigo: '3' })
        if (checkedCarreto) services.push({ name: "Carretos", codigo: '4' })
        if (checkedMassagista) services.push({ name: "Massagista", codigo: '5' })
        if (checkedMontador) services.push({ name: "Montador de Móveis", codigo: '6' })
        if (checkedEncanador) services.push({ name: "Encanador", codigo: '7' })
        if (checkedPedreiro) services.push({ name: "Pedreiro", codigo: '8' })
        if (checkedEletricista) services.push({ name: "Eletricista", codigo: '9' })
        if (checkedPintor) services.push({ name: "Pintor", codigo: '10' })

        return services
    }

    const pickImageAndSave = async (id) => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                aspect: [4, 4],
                quality: 1,
                base64: true,
                allowsMultipleSelection: true,
                selectionLimit: 5
            });
            const urls = await uploadImage(result.assets)
            await saveImages(urls, id)
        } catch (error) {
            console.error(error)
        }

    };

    function newWorker() {
        if (descricao == '') {
            alert('Insira uma descrição')
            return
        }
        if (!checkedManicure && !checkedLimpeza && !checkedComputador && !checkedCarreto && !checkedMassagista && !checkedMontador && !checkedEncanador && !checkedPedreiro && !checkedEletricista && !checkedPintor) {
            alert('Marque alguma profissão')
            return
        }
        Alert.alert('Quase lá!', 'Deseja enviar suas imagens de seviços anteriores agora ?', [
            {
                text: 'Enviar agora',
                onPress: async () => {
                    setIsLoading(true)
                    data.description = descricao
                    data.servicos = getServices()

                    const newUser = await createUser(data)
                    console.log(newUser)
                    await pickImageAndSave(newUser.id)
                    _ = new UserInstance(newUser);
                    navigation.navigate('Home')
                    setIsLoading(false)
                }
            },
            {
                text: 'Enviar mais tarde',

                onPress: async () => {
                    setIsLoading(true)
                    data.description = descricao
                    data.servicos = getServices()

                    const newUser = await createUser(data)
                    if (newUser) {
                        _ = new UserInstance(newUser);
                        navigation.navigate('Home')
                    }

                    setIsLoading(false)
                }
            },
        ],
            {
                cancelable: false,
            },
        )

    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={120} color="#14274E" />
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <>
            <ScrollView>
                <View style={[styles.container, { marginTop: '10%' }]}>

                    <Text style={[styles.formTitle, { color: '#111111', fontSize: 28, paddingBottom: 10 }]}>Serviços disponibilizados:</Text>

                    <View style={styles.containerRegisterServiceProvider}>
                        <CheckBox
                            checked={checkedManicure}
                            onPress={() => toggleCheckbox(checkedManicure, setCheckedManicure)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Manicure"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedLimpeza}
                            onPress={() => toggleCheckbox(checkedLimpeza, setCheckedLimpeza)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Serviço de limpeza"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedComputador}
                            onPress={() => toggleCheckbox(checkedComputador, setCheckedComputador)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Manutenção de Computadores"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedCarreto}
                            onPress={() => toggleCheckbox(checkedCarreto, setCheckedCarreto)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Carretos (Transporte de móveis)"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedMassagista}
                            onPress={() => toggleCheckbox(checkedMassagista, setCheckedMassagista)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Massagista"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />

                    </View>
                    <View style={styles.containerRegisterServiceProvider}>
                        <CheckBox
                            checked={checkedMontador}
                            onPress={() => toggleCheckbox(checkedMontador, setCheckedMontador)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Montador de Móveis"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedEncanador}
                            onPress={() => toggleCheckbox(checkedEncanador, setCheckedEncanador)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Encanador (Reparos Hidráulicos)"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedPedreiro}
                            onPress={() => toggleCheckbox(checkedPedreiro, setCheckedPedreiro)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Pedreiro"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedEletricista}
                            onPress={() => toggleCheckbox(checkedEletricista, setCheckedEletricista)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Eletricista (Reparos Elétricos)"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                        <CheckBox
                            checked={checkedPintor}
                            onPress={() => toggleCheckbox(checkedPintor, setCheckedPintor)}
                            checkedIcon="square"
                            uncheckedIcon="square"
                            checkedColor='#111111'
                            uncheckedColor='#D9D9D9'
                            title="Pintor"
                            textStyle={{ fontSize: 17 }}
                            size={20}
                        />
                    </View>

                    <View style={{ alignSelf: 'flex-start', marginLeft: '10%' }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Fale um pouco sobre você:</Text>
                    </View>
                    <TextInput
                        style={[styles.formInput, { backgroundColor: "white", height: 150, textAlignVertical: 'top' }]}
                        keyboardType='default'
                        autoCapitalize='none'
                        multiline={true}
                        value={descricao}
                        onChangeText={setDescricao}
                    />

                    <TouchableOpacity onPress={newWorker} style={[styles.formButton, { backgroundColor: '#14274E' }]}>
                        <Text style={styles.textButton}>Finalizar</Text>
                    </TouchableOpacity>

                    <Pressable onPress={newWorker}>
                        <Text style={[styles.subButtonText, { marginBottom: '6%' }]}>Cadastrar serviços depois</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </>
    )
}