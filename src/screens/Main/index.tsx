import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Map } from './Map';
import { Profile } from './Profile';
import { useRoute } from '@react-navigation/native';

export function Main() {

    const Tab = createMaterialBottomTabNavigator();
    const route = useRoute()

    return (
        <>
            <Tab.Navigator
                initialRouteName="Map"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
            >
                <Tab.Screen
                    name="Map"
                    component={Map}
                    initialParams={route.params}
                    options={{
                        tabBarLabel: "Ver Mapa",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="google-maps" color="#fff" size={26} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    initialParams={route.params}
                    options={{
                        tabBarLabel: "Perfil",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="account" color="#fff" size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    )
}