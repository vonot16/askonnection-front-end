import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';
import { Image, View } from 'react-native';

import { styles } from './style';
import Logo from '../../../assets/images/logo.png';


export function SignIn() {

    type AuthResponse = {
        type: string;
        params: {
          access_token: string;
        }
      }

    const navigation =useNavigation<ProfileScreenNavigationProp>();

    async function handleSignIn() {
        navigation.navigate('Main')
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