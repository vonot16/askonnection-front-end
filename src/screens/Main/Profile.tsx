import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar, Title } from "react-native-paper";
import { getInstallerById, getPlanById, getUserById } from "../../API";

export function Profile() {
    const route = useRoute();
    const { _id, type } = route.params


    type personalDataSchema = {
        firstName: string,
        lastName: string,
        photo: string,
        email: string,
        phone: string,
        adress: {
            city: string,
            state: string,
            street: string,
            number: string,
            district: string,
        },
        avaliblePlans: [String],
        installReq: [Object]
    }

    type avaliblePlansSchema = {
        isp: string,
        download_speed: string,
        upload_speed: string,
        price_per_month: string
    }

    const [personalData, setPersonalData] = useState({} as personalDataSchema);

    const [avaliblePlans, setAvaliblePlans] = useState([{}] as [avaliblePlansSchema])

    const [isUser, setIsUser] = useState(type === "User" ? true : false)

    async function getPersonalData() {
        if (type === "User")
            setPersonalData(await getUserById(_id))

        if (type === "Installer")
            setPersonalData(await getInstallerById(_id))
    }

    async function getAvaliblePlans(planId) {
        let data = await getPlanById(planId)
            setAvaliblePlans([...avaliblePlans, data])


    }
    useEffect(() => {
        getPersonalData()
    }, [])

    useEffect(() => {
        if (personalData !== undefined && personalData !== null) {
            if (personalData.avaliblePlans !== undefined && type === "Installer")
                if (personalData.avaliblePlans.length >= 1) {
                    personalData.avaliblePlans.forEach((planId, i) => {
                        getAvaliblePlans(planId)
                        
                    })

                    let aux = avaliblePlans.filter(plan => plan.isp !== undefined)
                    setAvaliblePlans(aux)
                }

        }

    }, [personalData])

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                borderRadius: 15,
                height: "80%",
                width: "90%",
                padding: 15,
                backgroundColor: '#ffffffca'

            }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly" }}>
                    <Avatar.Image size={80} source={{ uri: personalData.photo !== undefined ? personalData.photo : "" }} />
                    <View style={{ alignItems: 'flex-end' }}>
                        <Title style={{
                            fontSize:24
                        }}>
                        {personalData.firstName !== undefined ? personalData.firstName : ""} {personalData.lastName !== undefined ? personalData.lastName : ""}</Title> 
                        <Text>{personalData.email !== undefined ? personalData.email : ""}</Text>
                        <Text>{personalData.phone !== undefined ? personalData.phone : ""}</Text>
                    </View>
                </View>
                <View style={{marginVertical:10 }}>
                    <Title>Endereço</Title>
                    <Text>{personalData.adress !== undefined ? personalData.adress.street : ""}, {personalData.adress !== undefined ? personalData.adress.number : ""} - {personalData.adress !== undefined ? personalData.adress.district : ""}</Text>
                    <Text>{personalData.adress !== undefined ? personalData.adress.city : ""} - {personalData.adress !== undefined ? personalData.adress.state : ""}</Text>
                </View>
                {type === "Installer" ?
                    <ScrollView style={{marginVertical:10 }}>
                        <Title>Planos Ofertados:</Title>
                        {avaliblePlans.map((plan, i) => (
                         plan.isp === undefined ? <></> :   <Text key={plan.isp + plan.download_speed + plan.price_per_month}>
                                {plan.isp} - Download: {plan.download_speed} / Upload: {plan.upload_speed} - R$ {plan.price_per_month}</Text>
                        )
                        )}
                    </ScrollView>
                    : <>
                    </>}
            </View>
        </View>
    )
}