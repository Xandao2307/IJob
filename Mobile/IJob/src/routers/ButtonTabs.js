import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SearchServiceProviderPage, ChatPage, Profile } from "../pages/screens";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

export  function ShowButtonTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
          headerShown:false,
          tabBarStyle:{
            borderTopWidth:0,
            height:80,
            
          },
          tabBarActiveTintColor:'#2D384C',
          tabBarLabelStyle:{
            fontSize:14
          }
        }
      }
    >
        <Tab.Screen 
          options={{
            tabBarIcon: (focused,color,size)=>{
              if (focused) {
                return <FontAwesome name='compass' size={27} color={color}/>
              }
              else return <FontAwesome name='compass' size={27} color={color}/>
            }
          }}
          name='Procurar'
          component={SearchServiceProviderPage} />

        <Tab.Screen
            options={{
              tabBarIcon: (focused,color,size)=>{
                if (focused) {
                  return <FontAwesome name='comments' size={27} color={color}/>
                }
                return <FontAwesome name='comments-o' size={27} color={color}/>
              }
            }}
          name='Chat' 
          component={ChatPage} />

        <Tab.Screen
            options={{
              tabBarIcon: (focused,color,size)=>{
                if (focused) {
                  return <FontAwesome name='user' size={27} color={color}/>
                }
                return <FontAwesome name='user-o' size={27} color={color}/>
              }
            }} 
          name='Perfil'
          component={Profile} />
    </Tab.Navigator>
  )
}