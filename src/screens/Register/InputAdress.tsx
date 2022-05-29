import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { insertNewInstaller, insertNewUser } from "../../API";
import { getLatLong } from "../../API/mapApi";
import { styles } from "./style";

export function InputAdress() {
    const navigation = useNavigation<ProfileScreenNavigationProp>()
    const route = useRoute()

    let userData = route.params


    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [district, setDistrict] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip_code, setZip_code] = useState("")
    const [phone, setPhone] = useState("")
    const [warning, setWarning] = useState(false)

    async function register() {
        if (street === "" || number === "" || district === "" || city === "" || state === "" || zip_code === "")
            setWarning(true)
        else {
            let { lat, lng } = await getLatLong(number, street, city, state)
            const adress = {
                street,
                number,
                district,
                city,
                state,
                zip_code,
                lat,
                lng
            }
            userData.adress = adress
            userData.phone = phone

            let result

            if (userData.type === "User")
                result = await insertNewUser(userData)

            else if (userData.type === "Installer")
                result = await insertNewInstaller(userData)
            navigation.navigate('Main', { _id: result._id, type: userData.type })
        }
    }

    return (

        <View style={{
            flex: 1,
            alignSelf: "center",
            justifyContent: 'center'
        }}>
            <Title fo>Adicione um Endereço:</Title>
            <TextInput
                label="Rua"
                value={street}
                onChangeText={text => setStreet(text)}
                style={styles.TextInput}
            />

            <TextInput
                label="Numero"
                value={number}
                onChangeText={text => setNumber(text)}
                style={styles.TextInput}
            />

            <TextInput
                label="Bairro"
                value={district}
                onChangeText={text => setDistrict(text)}
                style={styles.TextInput}
            />

            <TextInput
                label="Cidade"
                value={city}
                onChangeText={text => setCity(text)}
                style={styles.TextInput}
            />

            <TextInput
                label="Estado"
                value={state}
                onChangeText={text => setState(text)}
                style={styles.TextInput}
            />

            <TextInput
                label="CEP"
                value={zip_code}
                onChangeText={text => setZip_code(text)}
                style={styles.TextInput}
            />

            <TextInput
                label="Celular"
                value={phone}
                onChangeText={text => setPhone(text)}
                style={styles.TextInput}
            />

            {warning ? <Text style={styles.Warning}>Todos os campos devem ser preenchidos</Text>
                : <></>}

            <Button mode="contained" style={styles.confirmAdress} onPress={register}>
                Cadastrar
            </Button>

        </View>
    )
}