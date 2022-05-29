import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';
import { Image, StatusBar, View } from 'react-native';

import { styles } from './style';
import Logo from '../../../assets/images/logo.png';
import { verifyEmailRegistred } from '../../API';
import { getData, } from '../../API/authApi';


export function SignIn() {

    const navigation = useNavigation<ProfileScreenNavigationProp>();

    async function handleSignIn() {
        const userData = await getData()
        const verifyEmail = await verifyEmailRegistred(userData.email)
        if (verifyEmail.accountType === "User" || verifyEmail.accountType === "Installer")
            navigation.navigate('Main', { _id: verifyEmail._id, type:verifyEmail.accountType })
        else navigation.navigate('Register', { userData: userData })

    }

    function changeStatusBarColor() {
        StatusBar.setBackgroundColor('#4285F4')
    }

    useEffect(() => {
        changeStatusBarColor()
    })

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage} />
            <Button icon="google" mode="contained" onPress={handleSignIn} style={styles.signInButton} labelStyle={styles.textButton}>
                Sign In
            </Button>
        </View>
    )
}