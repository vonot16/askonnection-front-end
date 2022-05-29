import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

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
        backgroundColor:"#00af00"
    },

    TextInput:{
        width: 350,
        padding: 10,
        borderRadius: 20,
        marginVertical:10,
    },

    confirmAdress:{
        borderRadius:10,
        marginTop:0,
        width: 350,
        backgroundColor:"#00af00"
    },

    Warning:{
        backgroundColor:"red",
        textAlign:"center",
        fontSize:18,
        color: 'white',
        marginBottom:12,
        borderRadius:8
    }
})