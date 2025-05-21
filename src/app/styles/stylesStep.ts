import { StyleSheet } from "react-native";

export const stylesStep  = (theme: any) => StyleSheet.create
({
    text_main:
    {
        marginBottom: 5,
        fontWeight: "500", 
        fontSize: 15, 
        color:theme.colors.paragraph_extra,
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
        borderColor: theme.colors.paragraph_extra,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width:'85%',
        color: theme.colors.paragraph_extra, 
    },
    button_list:
    {
        backgroundColor:theme.colors.button_extra,
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        width:'10%',
        alignItems:"center",
        justifyContent:"center",

    },
    button_text:
    {
        color:theme.colors.button_text,
        textAlign: "center"
    }

})