import React from "react"
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from "react"
import { View, Text } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "./style"

export function SelectType() {

    const navigation = useNavigation<ProfileScreenNavigationProp>()
    const route = useRoute()

    const [selected, setSelected] = useState("User")
    let userData = route.params

    function register() {
        if (selected === "User")
            userData.type = "User"
        if (selected === "Installer")
            userData.type = "Installer"
        navigation.navigate('InputAdress', userData)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.question}>
                Qual o tipo de conta deseja criar?
            </Text>
            <Button icon="account" mode={selected === "User" ? "contained" : "outlined"} style={styles.button} onPress={() => setSelected("User")} >
                Usuario
            </Button>
            <Button icon="face-agent" mode={selected === "Installer" ? "contained" : "outlined"} style={styles.button} onPress={() => setSelected("Installer")} >
                Técnico
            </Button>

            <Button mode="contained" style={styles.confirm} onPress={register}>
                Continue
            </Button>
        </View>
    )
}