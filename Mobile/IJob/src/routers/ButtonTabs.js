import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SearchServiceProviderPage, ChatPage, Profile, Historic } from "../pages/screens";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

export function ShowButtonTabs({ socketProvider }) {
  console.log('socketProvider', socketProvider)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          height: 70,
        },
        tabBarActiveTintColor: '#2D384C',
        tabBarLabelStyle: {
          fontSize: 17,
        },
        headerStyle: {
          backgroundColor: '#394867',
          height: 115,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 35,
          fontWeight: 'bold',
          color: '#F1F6F9',
        }
      }
      }
    >
      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => {
            if (!focused.focused) {
              return <FontAwesome name='compass' size={40} color={'#98A8C7'} />
            }
            else return <FontAwesome name='compass' size={40} color={'#2D384C'} />
          }
        }}
        name='Bem vindo'
        component={SearchServiceProviderPage} />

      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => {
            if (!focused.focused) {
              return <FontAwesome name='comments' size={40} color={'#98A8C7'} />
            }
            else return <FontAwesome name='comments-o' size={40} color={'#2D384C'} />
          }
        }}
        name='Chat'
        children={() => <ChatPage socketProvider={socketProvider} />}
      //component={ChatPage} 
      />

      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => {
            if (!focused.focused) {
              return <FontAwesome name='user' size={40} color={'#98A8C7'} />
            }
            else return <FontAwesome name='user-o' size={40} color={'#2D384C'} />
          }
        }}
        name='Perfil'
        component={Profile} />

      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => {
            if (!focused.focused) {
              return <FontAwesome name='calendar' size={40} color={'#98A8C7'} />
            }
            else return <FontAwesome name='calendar-o' size={40} color={'#2D384C'} />
          }
        }}
        name='Historico'
        component={Historic} />
    </Tab.Navigator>
  )
}