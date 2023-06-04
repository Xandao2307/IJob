import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SearchServiceProviderPage, ChatPage, Profile } from "../pages/screens";

const Tab = createBottomTabNavigator()

export  function ShowButtonTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='SearchServiceProviderPageTab' component={SearchServiceProviderPage} />
        <Tab.Screen name='ChatPageTab' component={ChatPage} />
        <Tab.Screen name='ProfileTab' component={Profile} />
    </Tab.Navigator>
  )
}