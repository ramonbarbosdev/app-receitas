import { StyleSheet } from "react-native";

export const stylesHome = (theme: any) => StyleSheet.create
({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background_extra,  
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: theme.colors.background_extra,
  },
  button_add_box: {
    backgroundColor: '#ff8e3c',
    padding: 15,
    borderRadius: 30,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  error: {
    color: 'red',
    padding: 20,
  },
});
