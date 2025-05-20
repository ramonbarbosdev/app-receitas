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
        marginBottom: 10
    },
    input_title:
    {
       marginBottom: 5,
       fontSize:15,
       fontWeight:'500'
    },
    input:
    {
        borderWidth: 1,
        borderColor: "#0d0d0d",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width:'100%',
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
        color:'#eff0f3',
        fontSize:20,
        fontWeight:'500'
    }
 
    

})