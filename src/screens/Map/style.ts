import { Dimensions, StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    optionButton:{
        width: 150,
    },

    optionView:{
        position: "absolute",
        top: 20,
        marginVertical: 50,
        alignItems:'center',
        zIndex:1,
        backgroundColor:'#fff',
        padding: 15,
        borderRadius:5,
    },

    buttonGroup:{
        margin: 10,
        flexDirection:"row",
    },

    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    marker:{
        width: 200,
        height: 200,
        borderRadius:400
    }
    
})