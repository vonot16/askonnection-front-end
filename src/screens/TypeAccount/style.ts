import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },

    button:{
        borderRadius:10,
        width: 300,
        height: 200,
        justifyContent:"center",
        marginVertical:15
    },

    question:{
        textAlign:"center",
        marginHorizontal:10,
        fontSize:36,
    },

    confirm:{
        borderRadius:10,
        marginTop:30,
        width: 300,
        backgroundColor:"#00FF00"
    }
})