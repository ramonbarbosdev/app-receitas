import { StyleSheet } from "react-native";

export const styles = StyleSheet.create
({
    container:
    {
        backgroundColor:'#eff0f3',
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,
    },
    form:
    {
        height: '80%',
        backgroundColor:'#eff0f3',

    },
    input_box:
    {
        height: 50,
        marginTop:30,

    },
    input_title:
    {
       marginBottom: 5,
       fontSize:15,
       fontWeight:'500'
    },
    input:
    {
        borderRadius: 7,
        borderColor: '#0d0d0d',
        height: '90%',
        borderWidth:1,
    },
    text_area_box:
    {
        height: 50,
        marginTop:30,
    },
    text_area:
    {
        borderRadius: 7,
        borderColor: '#0d0d0d',
        height: '80%',
        borderWidth:1,
        padding: 5
    },
    button:
    {
        marginTop:30,
        backgroundColor:'#ff8e3c',
        height: 50,
        borderRadius: 7,
        justifyContent: "center",
        alignItems:"center",

    },
    button_title:
    {
        color:'#eff0f3',
        fontSize:20,
        fontWeight:'500'
    }
 
    

})