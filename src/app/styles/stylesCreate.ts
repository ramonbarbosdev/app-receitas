import { StyleSheet } from "react-native";

export const styleCreate  = (theme: any) => StyleSheet.create
({
    safeArea: {
        flex: 1,
        backgroundColor: theme.colors.background_extra,  
    },
    container:
    {
        backgroundColor:theme.colors.background_extra,
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,
    },
    form:
    {
        height: '80%',
        backgroundColor:theme.colors.background_extra,

    },
    input_box:
    {
        marginBottom: 10
    },
    input_title:
    {
        color:theme.colors.paragraph_extra,
       marginBottom: 5,
       fontSize:15,
       fontWeight:'500'
    },
    input:
    {
        borderWidth: 1,
        borderColor: theme.colors.paragraph_extra,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width:'100%',
        color: theme.colors.paragraph_extra, 
    },
    button:
    {
        
        backgroundColor:'#ff8e3c',
        height: 50,
        borderRadius: 7,
        justifyContent: "center",
        alignItems:"center",

    },
    button_title:
    {
        color: theme.colors.button_text,
        fontSize:20,
        fontWeight:'500'
    }
 
    

})