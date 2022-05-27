import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';
import { Image, Text, View } from 'react-native';

import { styles } from './style';
import Logo from '../../../assets/images/logo.png';


export function SignIn() {

    const navigation = useNavigation();

    async function handleSignIn() {
        //navigation.navigate('');
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage}/>
            <Button icon="google" mode="contained" onPress={handleSignIn} style={styles.signInButton} labelStyle={styles.textButton}>
                    Sign In
            </Button>
        </View>
    )
}