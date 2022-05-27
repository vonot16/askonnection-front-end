import React, { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-paper";
import { styles } from "./style";

export function TypeAccount() {

    const [selected, setSelected] = useState("user")
    const navigation=useNavigation<ProfileScreenNavigationProp>();

    function goToApp(){
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.question}>
                Qual o tipo de conta deseja criar?
            </Text>
            <Button icon="account" mode={selected === "user" ? "contained" : "outlined"} style={styles.button} onPress={() => setSelected("user")} >
                Usuario
            </Button>
            <Button icon="face-agent" mode={selected === "tec" ? "contained" : "outlined"} style={styles.button} onPress={() => setSelected("tec")} >
                Técnico
            </Button>

            <Button mode="contained" style={styles.confirm} onPress={goToApp}>
                Confirmar
            </Button>
        </View>
    )
}