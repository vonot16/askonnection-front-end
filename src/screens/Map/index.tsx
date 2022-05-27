import React, { useState } from 'react';

import MapView, {
    Callout,
    Marker,
    PROVIDER_GOOGLE,
    Region,
} from "react-native-maps";
import { View, Text, Image } from 'react-native';
import { styles } from './style';
import { Button } from 'react-native-paper';

export function Map() {

    const [searchByPlans, setSearchByPlans] = useState(true)

    const techs =[
        
        {
            "id": 1,
            "name": "Forest Wilderman",
            "rating": 5,
            "price_per_km": 4,
            "lat": -22.07313024696883,
            "lng": -45.48590095909857
          },
      ]

    return (

        <View style={styles.container}>
            <View style={styles.optionView}>
                <Text>
                    Procurar Por:
                </Text>
                <View style={styles.buttonGroup}>
                    <Button icon="access-point" mode={searchByPlans===true ? "contained" : "outlined"} onPress={() => setSearchByPlans(true)} style={styles.optionButton}>
                        Planos
                    </Button>
                    <Button icon="face-agent" mode={searchByPlans===false ? "contained" : "outlined"} onPress={() => setSearchByPlans(false)} style={styles.optionButton}>
                        Técnicos
                    </Button>
                </View>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
            >
                {techs.map((tech)=>(
                     <Marker
                     key={tech.id}
                     coordinate={{
                       latitude: Number(tech.lat),
                       longitude: Number(tech.lng),
                     }}
                   >
                       <Image source={{uri:"https://avatars.githubusercontent.com/u/61352086?v=4"}} style={styles.marker} >

                       </Image>
                   </Marker>
                ))}

            </MapView>
        </View>
    )
}