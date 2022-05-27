import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';
import { Image, StatusBar, View } from 'react-native';

import { styles } from './style';
import Logo from '../../../assets/images/logo.png';


export function SignIn() {

    const accountExist = false

    const navigation=useNavigation<ProfileScreenNavigationProp>();

    async function handleSignIn() {
        accountExist ?
            navigation.navigate('Main')
            : navigation.navigate('Account')
    }

    function changeStatusBarColor(){
        StatusBar.setBackgroundColor('#4285F4')
    }

    useEffect(()=>{
        changeStatusBarColor()
    })

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage}/>
            <Button icon="google" mode="contained" onPress={handleSignIn} style={styles.signInButton} labelStyle={styles.textButton}>
                    Sign In
            </Button>
        </View>
    )
}