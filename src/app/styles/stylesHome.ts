import { StyleSheet } from "react-native";

export const stylesHome = (theme: any) => StyleSheet.create
({
    safeArea: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    container:
    {
        backgroundColor:theme.colors.background,
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,
    },
   
     button_add:
    {
        height:'10%',
        alignItems:"center",
        justifyContent:"center",

    },
    button_add_box:
    {
        backgroundColor:'#ff8e3c',
        padding:15,
        borderRadius:30
    }

    

})