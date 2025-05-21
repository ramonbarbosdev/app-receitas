
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useThemeContext } from "./styles/ThemeContext";
import { stylesHome } from "./styles/stylesHome";
import { Receitas } from "./models/Receitas";
import Item from "./components/component/item";
import Header from "./components/component/header";


function HomeScreen()
{
    const [list, setList] = useState<Receitas[]>([]);
    const { theme, toggleTheme } = useThemeContext();
    const styles = stylesHome(theme);
    const router = useRouter();

    async function getData()
    {
        try
        {
            const dados = await AsyncStorage.getItem('recipes');
            const itens = dados ? JSON.parse(dados) : [];
            setList(itens)
            
        } catch (e) {
            console.error("Erro ao carregar dados do AsyncStorage", e);
        }
    }

    useEffect(() => {
        getData();
    },[list]);

    return(
       <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title="Inicio" isMain={true} />

                <View style={styles.button_add}>
                    <TouchableOpacity  style={styles.button_add_box} onPress={()=>router.push('/components/createrecipescreen')}>
                        <Feather name="plus" size={24} color="#fff"   />
                    </TouchableOpacity>
                </View>
                
                <Item data={list}/>
            </View>
        </SafeAreaView>
    )
}


export default HomeScreen;