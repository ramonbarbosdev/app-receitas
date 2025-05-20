import { StyleSheet } from "react-native";

export const styles = StyleSheet.create
({
    text_main:
    {
        marginBottom: 5,
        fontWeight: "500", 
        fontSize: 15, 
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
        borderColor: "#0d0d0d",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width:'85%',
    },
    button_list:
    {
        backgroundColor: "#ff8e3c",
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        width:'10%',
        alignItems:"center",
        justifyContent:"center",

    },
    button_text:
    {
        color: "#fff", textAlign: "center"
    }

})