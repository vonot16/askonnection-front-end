import React from "react";
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { SelectType } from "./SelectType";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InputAdress } from "./InputAdress";

const Stack = createNativeStackNavigator();

export function Register() {
    const navigation = useNavigation<ProfileScreenNavigationProp>()
    const route = useRoute()
    const { userData } = route.params


    return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }}
                    initialParams={userData}
                    name="TypeAccount"
                    component={SelectType}
                />

                <Stack.Screen options={{ headerShown: false }}
                    name="InputAdress"
                    component={InputAdress}
                />
            </Stack.Navigator>
        )
}