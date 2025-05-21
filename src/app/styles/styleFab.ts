import { StyleSheet } from "react-native";

export const styleFab  = (theme: any) => StyleSheet.create
({
      fab: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      zIndex: 999,
      backgroundColor: theme.colors.button_extra ,
      shadowColor: theme.colors.color_shadow ,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    

})