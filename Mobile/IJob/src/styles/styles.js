import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F6F9',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoContainer:{
        paddingBottom:'18%'
      },
      logo:{
        height:90,
        width:140,
      },
      formTitle:{
        fontSize:36,
        fontWeight:'bold',
        color:'#14274E',
        margin:10,
        textAlign:'center',
        paddingBottom:35,
      },
      subText:{
        color:'black',
        fontSize:13,
        paddingBottom:20
      },
      formInput:{
        borderColor:'#394867',
        borderWidth:1,
        borderRadius:9.82177,
        fontSize:16,
        padding:10,
        margin:10,
        width: 309.93,
        height: 46.93
      },
      formButton:{
        backgroundColor:'#394867',
        margin:10,
        padding:10,
        borderRadius:9.82177,
        borderRadius:10,
        alignItems:'center',
        width: 309.93,
        height: 46.93
      },
      textButton:{
        color:'white',
        fontSize:17
      },
      subButtonText:{
        color:'#9D9595',
        fontSize:17
      }
      
}) 