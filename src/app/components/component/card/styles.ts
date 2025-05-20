import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create
({
    container:
    {
        backgroundColor:'#fff',
        borderRadius: 5,
        padding: 15,
        maxHeight:150,
        marginTop: 10,
    },
    card_header:
    {
        flexDirection:"row",
        height: '50%',
        alignItems:"center"

    },
    card_header_box_1:
    {
        width:'80%',
    },
    card_header_box_2:
    {
        width:'20%',
        alignItems:"flex-end"
    },
    card_header_box_title_1:
    {
        fontSize: width * 0.06, 
        fontWeight:"700"
    },
      card_header_box_title_2:
    {
        fontSize: RFValue(14),
        fontWeight:"600"
    },
    card_body:
    {
        width:'100%',
        height:'55%'
    },
     card_body_text:
     {
        fontSize: RFValue(14),
        fontWeight:"400",
     },
    card_footer:
    {
        height:'50%'
    },
    card_footer_box_1:
    {
        
    },
    card_footer_box_2: {
    flexDirection: "row",
    flexWrap: "wrap",         
    alignItems: "center",
    rowGap: 5,                
    columnGap: 8,             
    marginTop: 5,             
  },
   card_footer_box_2_content: {
    backgroundColor: '#ff8e3c',
    alignItems: "center",
    justifyContent: "center", 
    paddingHorizontal: 10,    
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 5,          
},
    card_footer_title:
    {
        fontSize:  RFValue(12),
        fontWeight:"600"
    },
    card_footer_box_2_content_text:
    {
        fontSize: RFValue(10),
        fontWeight:"700",
        color:'#fff'
    },

})