import { StyleSheet } from "react-native";

export const styles = StyleSheet.create
({
    container:
    {
        backgroundColor:'#fff',
        borderRadius: 5,
        padding: 15,
        height:250
    },
    card_header:
    {
        flexDirection:"row",
        height: '20%',
        alignItems:"center"

    },
    card_header_box_1:
    {
        width:'80%'
    },
    card_header_box_2:
    {
        width:'20%'
    },
    card_header_box_title_1:
    {
        fontSize: 25,
        fontWeight:"700"
    },
      card_header_box_title_2:
    {
        fontSize: 15,
        fontWeight:"600"
    },
    card_body:
    {
        width:'100%',
        height:'55%'
    },
     card_body_text:
     {
        fontSize: 15,
        fontWeight:"400",
     },
    card_footer:
    {
        height:'25%'
    },
    card_footer_box_1:
    {
        
    },
    card_footer_box_2:
    {
        flexDirection:"row",
        alignItems:"center"  ,
        height:'70%'
    },
    card_footer_box_2_content:
    {
        backgroundColor:'#ff8e3c',
        alignItems:"center",
        padding:5,
        marginLeft:10,
        borderRadius:5
    },
    card_footer_title:
    {
        fontSize: 15,
        fontWeight:"600"
    },
    card_footer_box_2_content_text:
    {
        fontSize: 15,
        fontWeight:"700",
        color:'#fff'
    },

})