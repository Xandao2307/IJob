import React, { useEffect, useState } from 'react'
import {
  ScrollView, View, Text,
  ActivityIndicator, FlatList, TouchableOpacity
} from 'react-native'
import { styles } from '../../styles/styles'
import AvatarComponent from '../../components/avatarComponent'
import { Icon, Image } from '@rneui/base'
import UserInstance from "../../constants/userInstance";
import * as ImagePicker from 'expo-image-picker';

import { findUser } from "../../services/findUser";
import { uploadImage } from '../../services/uploadImagesService';
import { saveImages } from '../../services/saveImagesService';

export default function Profile({ navigation }) {
  const userLogged = new UserInstance()
  const [user, setUser] = useState({})
  const [imageList, setImageList] = useState([])
  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refetch, setRefetch] = useState()

  const pickImageAndSave = async () => {
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
      await saveImages(urls, userLogged.data.id)
      setRefetch(new Date().getTime())
    } catch (error) {
      console.error(error)
    }

  };


  useEffect(() => {
    findUser(userLogged.data.id)
      .then((result) => {
        setUser(result)

        let imgs = result.imagens.map((img) => img.url)
        let services = result.imagens.map((img) => img.servicos)

        setImageList(imgs)
        setServices(services)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error)
      })

    return () => { };
  }, [refetch])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={120} color="#14274E" />
        <Text>Carregando...</Text>
      </View>
    );
  }


  if (!userLogged.data.independent) {
    return (
      <View style={[styles.container, { flex: 0 }]}>
        <View style={{ marginTop: 35 }}>
          <AvatarComponent size={155} />

          <TouchableOpacity
            onPress={() => signOut()}
            style={[styles.formButton, { width: 130, elevation: 5, height: 30, padding: 0, paddingTop: 3, alignSelf: 'flex-start' }]}
          >
            <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Sair</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.formTitle, { fontSize: 28, paddingBottom: 0, marginTop: 20, margin: 0, marginLeft: 40, alignSelf: 'flex-start' }]}>{user.name}</Text>
      </View>
    );
  }

  function signOut() {
    userLogged.clearData()
    navigation.navigate('Login')
  }

  return (
    <ScrollView style={{ backgroundColor: "#F1F6F9", flex: 1 }}>
      <View style={[styles.container, { flex: 0 }]}>
        <View style={{ marginTop: 35 }}>
          <AvatarComponent size={155} />

          <TouchableOpacity
            onPress={() => signOut()}
            style={[styles.formButton, { width: 130, elevation: 5, height: 30, padding: 0, paddingTop: 3, alignSelf: 'flex-start' }]}
          >
            <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Sair</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.formTitle, { fontSize: 28, paddingBottom: 0, marginTop: 20, margin: 0, marginLeft: 30, alignSelf: 'flex-start' }]}>{user.name}</Text>

        <View style={{ width: 320, flexDirection: 'row', marginTop: 15 }}>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', width: 270 }}>
            <Text style={[styles.formTitle, { fontSize: 16, paddingBottom: 4, margin: 0, marginLeft: -1, alignSelf: 'flex-start' }]}>Serviços disponíveis: </Text>
            <Text style={{ fontSize: 15, color: '#14274E', alignSelf: 'flex-start' }}>{services.join("; ")}</Text>
          </View>
          <Icon name='edit' size={35} style={{ marginLeft: 10, marginTop: 10 }} />
        </View>

        <View style={{ width: 320, flexDirection: 'row', marginTop: 15 }}>
          <View style={{ flexDirection: 'column', alignSelf: 'flex-start', width: 270 }}>
            <Text style={[styles.formTitle, { fontSize: 16, paddingBottom: 4, margin: 0, marginLeft: -1, alignSelf: 'flex-start' }]}>Descrição: </Text>
            <Text style={{ fontSize: 15, color: '#14274E', alignSelf: 'flex-start' }}>{user.description}</Text>
          </View>
          <Icon name='edit' size={35} style={{ marginLeft: 10, marginTop: 10 }} />
        </View>

        <View style={{ alignSelf: 'flex-start', marginLeft: 30, marginTop: 20 }} >
          <Text style={[styles.formTitle, { fontSize: 16, paddingBottom: 4, margin: 0, marginLeft: -1, alignSelf: 'flex-start' }]}>Vitrine do prestador: </Text>

          <View style={{ height: 160, width: 160 }}>
            <FlatList
              data={imageList}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              renderItem={({ item }) => (
                <Image
                  style={{ height: 160, width: 160, borderRadius: 8, marginVertical: 5, marginRight: 10 }}
                  source={{ uri: item }}
                />
              )}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <TouchableOpacity
            onPress={() => pickImageAndSave()}
            style={[styles.formButton, { width: 130, elevation: 5, height: 30, padding: 0, paddingTop: 3, alignSelf: 'flex-end' }]}
          >
            <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }} >
              Adicionar foto</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity 
            style={[styles.formButton,{width:130, elevation:5 ,height:30, padding:0, paddingTop:3, alignSelf:'flex-end'}]}
            >
            <Text style={{color:'white', fontSize:15,textAlign:'center', fontWeight:'bold'}}>Remover foto</Text>
            </TouchableOpacity> */}
        </View>
      </View>

    </ScrollView>

  )
}