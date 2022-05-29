import React, { useEffect, useState } from 'react';

import MapView, {
    Callout,
    Marker,
    PROVIDER_GOOGLE,
    Region,
} from "react-native-maps";
import { View, Text, Linking } from 'react-native';
import { styles } from './mapStyle';
import { Avatar, Button, IconButton } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { getAllInstallers, getAllPlans, getAllUsers, getInstallerById, getInstallerPlans, getInstallerPlansFromBD, getPlanById, getUserById } from '../../API';

export function Map() {
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

    const [searchByPlans, setSearchByPlans] = useState(false)
    const [installerId, setInstallerId] = useState("")
    const [personalData, setPersonalData] = useState({} as personalDataSchema);
    const [installersData, setInstallersData] = useState([{}] as [personalDataSchema])
    const [plansData, setPlansData] = useState([{}] as [avaliblePlansSchema])
    const [installerPhone, setInstallerPhone] = useState("")
    const [installerPlans, setInstallerPlans] = useState([String])
    const [avaliblePlans, setAvaliblePlans] = useState([{}] as [avaliblePlansSchema])

    const [usersData, setUsersData] = useState([{}] as [personalDataSchema])
    const [userPhone, setUserPhone] = useState("")
    const [userId, setUserId] = useState("")

    async function getPersonalData() {
        if (type === "User")
            setPersonalData(await getUserById(_id))
        else if (type === "Installer") {
            setPersonalData(await getInstallerById(_id))
            setInstallerId(_id)
        }

    }

    async function getAvaliblePlans(planId) {
        let data = await getPlanById(planId)
        setAvaliblePlans([...avaliblePlans, data])

    }

    async function getInstallersData() {
        setInstallersData(await getAllInstallers())
    }

    async function getUsersData() {
        setUsersData(await getAllUsers())
    }

    async function getPlansData() {
        setPlansData(await getAllPlans())
    }

    async function getInstallerPlans() {
        setInstallerPlans(await getInstallerPlansFromBD(installerId))
    }

    useEffect(() => {
        getPersonalData()
        getPlansData()
        if (type === "User") getInstallersData()
        else if (type === "Installer") getUsersData()
    }, [])

    useEffect(() => {
        if (installerId === "")
            setInstallerPlans([])
        else
            getInstallerPlans()
    }, [installerId])

    useEffect(() => {
        if (installerPlans.length <= 0)
            setAvaliblePlans([{}] as [avaliblePlansSchema])
        else {
            installerPlans.map((planId) => {
                getAvaliblePlans(planId)
            })

        }
    }, [installerPlans])

    if (type === "User")
        return (
            <View style={styles.container}>
                <View style={styles.optionView}>
                    <Text>
                        Procurar Por:
                    </Text>
                    <View style={styles.buttonGroup}>
                        <Button icon="face-agent" mode={searchByPlans === false ? "contained" : "outlined"} onPress={() => {
                            setSearchByPlans(false)
                            setInstallerId("")
                            setInstallerPhone("")
                        }} style={styles.optionButton}>
                            Técnicos
                        </Button>
                        <Button icon="access-point" mode={searchByPlans === true ? "contained" : "outlined"} onPress={() => setSearchByPlans(true)} style={styles.optionButton} disabled>
                            Planos
                        </Button>

                    </View>
                </View>

                {searchByPlans ?
                    <>
                        {installerId !== "" ?
                            avaliblePlans.map((plan, i) => (
                                plan.isp === undefined ? <></> : <View>
                                    <Text key={plan.isp + plan.download_speed + plan.price_per_month}>
                                        {plan.isp} - Download: {plan.download_speed} / Upload: {plan.upload_speed} - R$ {plan.price_per_month}</Text>

                                    <Button icon="whatsapp" onPress={async () => {
                                        await Linking.openURL(`https://wa.me/55${installerPhone.trim()}/?text=${encodeURI(`Gostaria de assinar o plano de R$ ${plan.price_per_month} da ${plan.isp}`)}`)
                                    }}>
                                        Contratar
                                    </Button>
                                </View>
                            )
                            )

                            : <Text>All Plans</Text>}
                    </> :
                    <>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                        >
                            {installersData.map(installer => (

                                <Marker
                                    key={installer._id !== undefined ? installer._id : ""}
                                    coordinate={{
                                        latitude: Number(installer.adress !== undefined ? installer.adress.lat : 0),
                                        longitude: Number(installer.adress !== undefined ? installer.adress.lng : 0),

                                    }}
                                    calloutAnchor={{
                                        x: 2.9,
                                        y: 0.8,
                                    }}
                                >
                                    <Avatar.Image source={{ uri: installer.photo !== undefined ? installer.photo : "" }} />

                                    <Callout tooltip onPress={() => {
                                        setSearchByPlans(true)
                                        setInstallerId(installer._id !== undefined ? installer._id : "")
                                        setInstallerPhone(installer.phone)
                                    }}>
                                        <View style={{
                                            width: 300,
                                            height: "100%",
                                            paddingHorizontal: 16,
                                            paddingVertical: 16,
                                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                                            borderRadius: 16,
                                            justifyContent: "center",
                                        }}>
                                            <Text>{installer.firstName !== undefined ? installer.firstName : ""} {installer.lastName !== undefined ? installer.lastName : ""}</Text>
                                            <Text>{installer.adress !== undefined ? installer.adress.city : ""} - {installer.adress !== undefined ? installer.adress.state : ""}</Text>
                                            <Text style={{ alignSelf: 'center', fontSize: 24 }}>Ver Planos</Text>
                                        </View>
                                    </Callout>
                                </Marker>

                            ))}

                        </MapView>
                    </>
                }
            </View >
        )
    else
        return (
            <View>

                {searchByPlans ?
                    <View>
                        <Button icon="close" style={{ position: 'absolute', top: 50, right: 0 }}
                            onPress={() => {
                                setSearchByPlans(false)
                                setUserId("")
                                setUserPhone("")
                            }} />
                        {avaliblePlans.map((plan, i) => (
                            plan.isp === undefined ? <></> :
                                <View style={{ alignSelf: 'center', position:'absolute', top:100 }}>
                                    <Text key={plan.isp + plan.download_speed + plan.price_per_month}>
                                        {plan.isp} - Download: {plan.download_speed} / Upload: {plan.upload_speed} - R$ {plan.price_per_month}</Text>

                                    <Button icon="whatsapp" onPress={async () => {
                                        await Linking.openURL(`https://wa.me/55${userPhone.trim()}/?text=${encodeURI(`Olá, acabei de verificar seu perfil, acho que o plano de R$ ${plan.price_per_month} da ${plan.isp} seria perfeito para você. Gostaria de assinar?`)}`)
                                    }}>
                                        Ofertar
                                    </Button>
                                </View>
                        )
                        )}
                    </View> : <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                    >
                        {usersData.map(user => (

                            <Marker
                                key={user._id !== undefined ? user._id : ""}
                                coordinate={{
                                    latitude: Number(user.adress !== undefined ? user.adress.lat : 0),
                                    longitude: Number(user.adress !== undefined ? user.adress.lng : 0),

                                }}
                                calloutAnchor={{
                                    x: 2.9,
                                    y: 0.8,
                                }}
                            >
                                <Avatar.Image source={{ uri: user.photo !== undefined ? user.photo : "" }} />

                                <Callout tooltip onPress={() => {
                                    setSearchByPlans(true)
                                    setUserId(user._id !== undefined ? user._id : "")
                                    setUserPhone(user.phone)
                                }}>
                                    <View style={{
                                        width: 300,
                                        height: "100%",
                                        paddingHorizontal: 16,
                                        paddingVertical: 16,
                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                        borderRadius: 16,
                                        justifyContent: "center",
                                    }}>
                                        <Text>{user.firstName !== undefined ? user.firstName : ""} {user.lastName !== undefined ? user.lastName : ""}</Text>
                                        <Text>{user.adress !== undefined ? user.adress.city : ""} - {user.adress !== undefined ? user.adress.state : ""}</Text>
                                        <Text style={{ alignSelf: 'center', fontSize: 24 }}>Ofertar Planos</Text>
                                    </View>
                                </Callout>
                            </Marker>

                        ))}

                    </MapView>
                }
            </View>)
}