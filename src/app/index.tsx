
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useThemeContext } from "./styles/ThemeContext";
import Item from "./components/component/item";
import Header from "./components/component/header";
import FAB from "./components/component/fab";
import { useReceitas } from "./hooks/useReceita";


function HomeScreen()
{
    const { theme, toggleTheme } = useThemeContext();
    const styles = style(theme);
    const router = useRouter();
    
    const { data, isLoading, isError } = useReceitas();

   if (isLoading) return <ActivityIndicator size="large" color="#007AFF" />;
   if (isError) return <Text style={styles.error}>Erro ao carregar dados.</Text>;


    return(
       <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title="Inicio" isMain={true} />

                <FAB onPress={() => router.push('/components/createrecipescreen')} />
                            
                <Item data={data}/>
            </View>
        </SafeAreaView>
    )
}


export default HomeScreen;


const style = (theme: any) => StyleSheet.create({
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
