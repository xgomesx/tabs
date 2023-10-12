import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

// ROTAS
import Home from '../screens/home/Home'
import Posts from '../screens/posts/Posts'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Router() {
    return (

        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>

            <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Usuários',
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="people" size={size} color={color} />
                        }
                    }} />

                <Tab.Screen
                    name="Posts"
                    component={Posts}
                    options={{
                        tabBarLabel: 'Usuários',
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="people" size={size} color={color} />
                        }
                    }} />

            </Tab.Navigator>

        </NavigationContainer>

    )
}