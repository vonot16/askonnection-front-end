import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function SignIn() {

    const navigation = useNavigation();

    async function handleSignIn() {
        //navigation.navigate('');
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>

        </View>
    )
}