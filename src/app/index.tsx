
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useThemeContext } from "./styles/ThemeContext";
import { stylesHome } from "./styles/stylesHome";
import { Receitas } from "./models/Receitas";
import Item from "./components/component/item";
import Header from "./components/component/header";
import FAB from "./components/component/fab";
import { useReceitas } from "./hooks/useReceita";


function HomeScreen()
{
    const { theme, toggleTheme } = useThemeContext();
    const styles = stylesHome(theme);
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