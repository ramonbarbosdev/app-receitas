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
        height: '90%',
        backgroundColor:'#eff0f3',

    },
    input_box:
    {
        height: 70,
        marginTop:15
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
        borderWidth:2,
    },
    text_area_box:
    {
        height: 120,
        marginTop:15
    },
    text_area:
    {
        borderRadius: 7,
        borderColor: '#0d0d0d',
        height: '90%',
        borderWidth:2,
        padding: 5
    },
    button:
    {
        marginTop: 10,
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