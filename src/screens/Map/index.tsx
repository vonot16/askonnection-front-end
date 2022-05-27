import React, { useState } from 'react';

import MapView, {
    Callout,
    Marker,
    PROVIDER_GOOGLE,
    Region,
} from "react-native-maps";
import { View, Text } from 'react-native';
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
        {
          "id": 2,
          "name": "Margarita Cronin",
          "rating": 10,
          "price_per_km": 2,
          "lat": -18.76021182506475,
          "lng": -51.6567536259022
        },
        {
          "id": 3,
          "name": "Myrtle Brekke",
          "rating": 4,
          "price_per_km": 2,
          "lat": -16.15286554126153,
          "lng": -43.01295131326434
        },
        {
          "id": 4,
          "name": "Angelica Kirlin",
          "rating": 7,
          "price_per_km": 1,
          "lat": -13.81823590628001,
          "lng": -52.36574503911272
        },
        {
          "id": 5,
          "name": "Jordane Stokes",
          "rating": 8,
          "price_per_km": 4,
          "lat": -7.580186781734245,
          "lng": -38.41660782388763
        },
        {
          "id": 6,
          "name": "Alessia Keeling",
          "rating": 10,
          "price_per_km": 1,
          "lat": -6.608724762601814,
          "lng": -53.42746522025222
        },
        {
          "id": 7,
          "name": "Alvina Witting",
          "rating": 9,
          "price_per_km": 1,
          "lat": -14.58073834740856,
          "lng": -41.1903525857145
        },
        {
          "id": 8,
          "name": "Adriana Hettinger",
          "rating": 1,
          "price_per_km": 2,
          "lat": -12.00061994005839,
          "lng": -48.45103922323238
        },
        {
          "id": 9,
          "name": "Sarah Weissnat",
          "rating": 8,
          "price_per_km": 3,
          "lat": -10.96130627608691,
          "lng": -56.32358157194428
        },
        {
          "id": 10,
          "name": "Dayne Lindgren",
          "rating": 2,
          "price_per_km": 1,
          "lat": -19.31739858375612,
          "lng": -50.37415117621334
        },
        {
          "id": 11,
          "name": "Simone Reynolds",
          "rating": 1,
          "price_per_km": 3,
          "lat": -15.24146571077505,
          "lng": -54.99594725372368
        },
        {
          "id": 12,
          "name": "Myrtice Heathcote",
          "rating": 9,
          "price_per_km": 1,
          "lat": -13.45047775374607,
          "lng": -44.78397877770085
        },
        {
          "id": 13,
          "name": "Samson Mante",
          "rating": 6,
          "price_per_km": 1,
          "lat": -28.70349999114085,
          "lng": -52.58621591121437
        },
        {
          "id": 14,
          "name": "Chandler Bednar",
          "rating": 6,
          "price_per_km": 1,
          "lat": -19.0059487567166,
          "lng": -53.35665204654681
        },
        {
          "id": 15,
          "name": "Wendy Schuster",
          "rating": 7,
          "price_per_km": 2,
          "lat": -8.001852425205383,
          "lng": -42.68060845694017
        },
        {
          "id": 16,
          "name": "Koby Thompson",
          "rating": 5,
          "price_per_km": 1,
          "lat": -6.801277547281055,
          "lng": -36.29699476418568
        },
        {
          "id": 17,
          "name": "Karley Funk",
          "rating": 10,
          "price_per_km": 1,
          "lat": -23.92060259324474,
          "lng": -51.04534364054948
        },
        {
          "id": 18,
          "name": "Dena Osinski",
          "rating": 7,
          "price_per_km": 1,
          "lat": -11.36466229437436,
          "lng": -51.32049940316822
        },
        {
          "id": 19,
          "name": "Alize Turcotte",
          "rating": 3,
          "price_per_km": 2,
          "lat": -6.363931676582166,
          "lng": -46.09253991341239
        },
        {
          "id": 20,
          "name": "Flavio Anderson",
          "rating": 8,
          "price_per_km": 1,
          "lat": -8.383138601136034,
          "lng": -51.21043709812071
        },
        {
          "id": 21,
          "name": "Stella Ortiz",
          "rating": 5,
          "price_per_km": 3,
          "lat": -22.07313024696883,
          "lng": -45.48590095909857
        },
        {
          "id": 22,
          "name": "Adam Wunsch",
          "rating": 4,
          "price_per_km": 1,
          "lat": -18.76021182506475,
          "lng": -51.6567536259022
        },
        {
          "id": 23,
          "name": "Walker Lesch",
          "rating": 3,
          "price_per_km": 1,
          "lat": -16.15286554126153,
          "lng": -43.01295131326434
        },
        {
          "id": 24,
          "name": "Adah Ortiz",
          "rating": 6,
          "price_per_km": 2,
          "lat": -13.81823590628001,
          "lng": -52.36574503911272
        },
        {
          "id": 25,
          "name": "Jensen Kub",
          "rating": 1,
          "price_per_km": 1,
          "lat": -7.580186781734245,
          "lng": -38.41660782388763
        },
        {
          "id": 26,
          "name": "Ward Pollich",
          "rating": 1,
          "price_per_km": 2,
          "lat": -6.608724762601814,
          "lng": -53.42746522025222
        },
        {
          "id": 27,
          "name": "Bert Adams",
          "rating": 1,
          "price_per_km": 3,
          "lat": -14.58073834740856,
          "lng": -41.1903525857145
        },
        {
          "id": 28,
          "name": "Kobe Paucek",
          "rating": 5,
          "price_per_km": 4,
          "lat": -12.00061994005839,
          "lng": -48.45103922323238
        },
        {
          "id": 29,
          "name": "Macy Dooley",
          "rating": 1,
          "price_per_km": 3,
          "lat": -10.96130627608691,
          "lng": -56.32358157194428
        },
        {
          "id": 30,
          "name": "Ana Zieme",
          "rating": 5,
          "price_per_km": 2,
          "lat": -19.31739858375612,
          "lng": -50.37415117621334
        },
        {
          "id": 31,
          "name": "Loyce Miller",
          "rating": 8,
          "price_per_km": 4,
          "lat": -15.24146571077505,
          "lng": -54.99594725372368
        },
        {
          "id": 32,
          "name": "Adrain Champlin",
          "rating": 10,
          "price_per_km": 1,
          "lat": -13.45047775374607,
          "lng": -44.78397877770085
        },
        {
          "id": 33,
          "name": "Kenny Altenwerth",
          "rating": 6,
          "price_per_km": 1,
          "lat": -28.70349999114085,
          "lng": -52.58621591121437
        },
        {
          "id": 34,
          "name": "Aiyana Rohan",
          "rating": 3,
          "price_per_km": 4,
          "lat": -19.0059487567166,
          "lng": -53.35665204654681
        },
        {
          "id": 35,
          "name": "Mandy Greenholt",
          "rating": 8,
          "price_per_km": 2,
          "lat": -8.001852425205383,
          "lng": -42.68060845694017
        },
        {
          "id": 36,
          "name": "Maryjane Klocko",
          "rating": 5,
          "price_per_km": 2,
          "lat": -6.801277547281055,
          "lng": -36.29699476418568
        }
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
                   </Marker>
                ))}

            </MapView>
        </View>
    )
}