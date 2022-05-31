import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home'
import MainDrawer from './MainDrawer'

const Stack = createNativeStackNavigator();

export default () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Preload"
                component={Preload}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainDrawer"
                component={MainDrawer}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}