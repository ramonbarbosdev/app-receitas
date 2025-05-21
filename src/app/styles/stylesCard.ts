import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");


export const stylesCard  = (theme: any) => StyleSheet.create
({
    container:
    {
        backgroundColor: theme.colors.card,
        borderRadius: 5,
        padding: 15,
        maxHeight:150,
        marginTop: 10,
        shadowColor: theme.colors.color_shadow,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
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
        color: theme.colors.paragraph_extra,
        fontSize: width * 0.06, 
        fontWeight:"700"
    },
      card_header_box_title_2:
    {
        color:theme.colors.paragraph_extra,
        fontSize: RFValue(14),
        fontWeight:"600"
    },
    card_body:
    {
        width:'100%',
        height:'55%'
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
    backgroundColor: theme.colors.button_extra,
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
        fontWeight:"600",
        color:theme.colors.paragraph_extra,
    },
    card_footer_box_2_content_text:
    {
        fontSize: RFValue(10),
        fontWeight:"700",
        color:theme.colors.button_text,
    },

})