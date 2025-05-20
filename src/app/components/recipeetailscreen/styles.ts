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
    box:
    {
      backgroundColor: '#fff',
      height:'80%'

    },
    box_title:
    {
        height:'10%',
        justifyContent:"center",
        padding:10
    },
    title_main:
    {
        color: '#2a2a2a',
        fontSize: 25,
        fontWeight:'700'
    },
    box_empty:
    {
        height:'5%',
    },
    box_recipe:
    {
        height:'80%',
        padding:10,

    },
    box_recipe_child_1:
    {
        height:'10%',
        justifyContent:"center",
        marginBottom:20
    },
    box_recipe_child_1_text:
    {
        color: '#2a2a2a',
        fontSize: 20,
        fontWeight:'700'
    },
    box_recipe_child_2:
    {
        height:'80%',
        marginBottom:15
    },
    box_recipe_child_2_text:
    {
        color: '#2a2a2a',
        fontSize: 14,
        fontWeight:'700'
    }


})