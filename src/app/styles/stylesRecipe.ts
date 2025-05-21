import { StyleSheet } from "react-native";

export const stylesRecipe = (theme: any) =>  StyleSheet.create
({
    container:
    {
        backgroundColor:theme.colors.background_extra,
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,
    },
    box:
    {
        backgroundColor:theme.colors.card,
        height:'80%',
        borderRadius:15,
        shadowColor: theme.colors.color_shadow,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    box_title:
    {
        height:'10%',
        padding:10,
        flexDirection:'row',
       
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
        color: theme.colors.paragraph_extra,
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
        color: theme.colors.paragraph_extra,
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
        color: theme.colors.paragraph_extra,
    },
     box_recipe_child_3:
    {
        height:'30%',
        marginBottom:15
    },
    box_recipe_child_paragraph:
    {
        color: theme.colors.paragraph_extra,
        fontSize: 14,
        fontWeight:'700'
    },

    dropdown:
    {
        backgroundColor: theme.colors.card,
        position: "absolute",
        top: 40,
        right: 10,
        zIndex: 10,
        borderWidth: 1,
        borderColor:  theme.colors.background_extra,
        borderRadius: 5,
        shadowColor: theme.colors.color_shadow,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },

    dropdown_item:
    {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.background_extra,
    },

    dropdown_text:
    {
        fontSize: 16,
        color: theme.colors.paragraph_extra
    },



})