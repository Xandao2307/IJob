import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Scheduling, Conversation, Assessement, Register, ServiceProviderPage, ShowEmployes, Historic, Details } from "../pages/screens";
import { ShowButtonTabs } from './ButtonTabs';

const Stack = createNativeStackNavigator()

export default function Routes(socket) {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ServiceProvider' component={ServiceProviderPage} />
            <Stack.Screen name='ShowEmployes' component={ShowEmployes} />
            <Stack.Screen name='Historic' component={Historic} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Assessement' component={Assessement} />
            <Stack.Screen name='Scheduling' component={Scheduling} />
            <Stack.Screen name='Conversation' children={({ route }) => {
                return <Conversation route={route} socketProvider={socket} />
            }} />
            <Stack.Screen name='Home' children={({ route }) => {
                return <ShowButtonTabs route={route} socketProvider={socket} />
            }} />
        </Stack.Navigator>
    )
}