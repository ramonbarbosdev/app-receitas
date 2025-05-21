import { StyleSheet } from "react-native";


export const stylesHeader = (theme: any) => StyleSheet.create
({
    container:
    {
        padding: 15,
        flexDirection:"row",
        height:'10%',
        // backgroundColor: theme.colors.background,
    },
    box_center:
    {
        width:'33.33%',
        justifyContent:"center",
        alignItems:"center"
    },
    box_back:
    {
        width:'33.33%',
        justifyContent:"center",
    },
    box_option:
    {
        width:'33.33%',
        justifyContent:"center",
        alignItems:"flex-end"
    },
    header_title:
    {
        fontSize:20,
        fontWeight:"600",
        color: theme.colors.paragraph_extra,
    }

})