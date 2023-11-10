import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, ChatPage, Profile, Register, ServiceProviderPage, SearchServiceProviderPage, ShowEmployes, Historic, Details } from "../pages/screens";
import { ShowButtonTabs } from './ButtonTabs';

const Stack = createNativeStackNavigator()

export default function LoginScreen() {
   
   return(
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown:false}}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='ServiceProvider' component={ServiceProviderPage}/>
            <Stack.Screen name='ShowEmployes' component={ShowEmployes}/>
            <Stack.Screen name='Historic' component={Historic}/>
            <Stack.Screen name='Details' component={Details}/>
            <Stack.Screen name='Home' component={ShowButtonTabs}/>
        </Stack.Navigator>
    )
}

export function LoginNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        </Stack.Navigator>
    )
}

export function RegisterNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Register' component={Register}/>
        </Stack.Navigator>
    )
}

export function HomeNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Home' component={ShowButtonTabs}/>
        </Stack.Navigator>
    )
}
export function ServiceProviderNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='ServiceProvider' component={ServiceProviderPage}/>
        </Stack.Navigator>
    )
}

export function ChatNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Chat' component={ChatPage}/>
        </Stack.Navigator>
    )
}

export function ProfileNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Profile' component={Profile}/>
        </Stack.Navigator>
    )
}

export function SearchServiceProviderNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='SearchServiceProvider' component={SearchServiceProviderPage}/>
        </Stack.Navigator>
    )
}

export function HistoricNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Historic' component={Historic}/>
        </Stack.Navigator>
    )
}

export function DetailsNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Details' component={Details}/>
        </Stack.Navigator>
    )
}