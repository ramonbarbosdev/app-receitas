import { StyleSheet } from "react-native";

export const styles = StyleSheet.create
({
    text_main:
    {
        fontWeight: "500", 
        fontSize: 15, 
        marginBottom: 5,
        marginTop: 5
    },
    box_input:
    {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

    },
    input_list:
    {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width:'85%'
    },
    button_list:
    {
        backgroundColor: "#ff8e3c",
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        width:'10%',

    },
    button_text:
    {
        color: "#fff", textAlign: "center"
    }

})