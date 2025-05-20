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
      height:'80%',
      borderRadius:15,

    },
    box_title:
    {
        height:'10%',
        padding:10,
        flexDirection:'row'

    },
    box_title_1:
    {
        flexDirection:'row',
        alignItems: "center",
        width:'90%',

    },
    box_title_2:
    {
        width:'10%',
        justifyContent:"center",
        alignItems:"center",
    },
    title_main:
    {
        color: '#2a2a2a',
        fontSize: 20,
        fontWeight:'700',
        marginLeft:10
    },
    box_recipe:
    {
        height:'80%',
        padding:20,

    },
    box_recipe_child_1:
    {
        height:'5%',
        justifyContent:"center",
        marginBottom:20
    },
    box_recipe_child_1_paragraph:
    {
        color: '#2a2a2a',
        fontSize: 18,
        fontWeight:'700'
    },
    box_recipe_child_2:
    {
        height:'10%',
        marginBottom:15
    },
    text:
    {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 4,
        color: '#444'
    },
     box_recipe_child_3:
    {
        height:'30%',
        marginBottom:15
    },
    box_recipe_child_paragraph:
    {
        color: '#2a2a2a',
        fontSize: 14,
        fontWeight:'700'
    },

    dropdown:
    {
    backgroundColor: "#fff",
    position: "absolute",
    top: 40,
    right: 10,
    zIndex: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    },

    dropdown_item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    },

    dropdown_text: {
    fontSize: 16,
    },



})