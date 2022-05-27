import React from 'react';
import { useNavigation } from '@react-navigation/native';

import MapView, {
    Callout,
    Marker,
    PROVIDER_GOOGLE,
    Region,
} from "react-native-maps";
import { Text, View } from 'react-native';
import { styles } from './style';

export function Map() {

    return (
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            >

            </MapView>
        </View>
    )
}