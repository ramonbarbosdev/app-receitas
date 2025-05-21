
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo

import Header from "../component/header";
import Card from "../component/card";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../..";
import Item from "../component/item";
import { useEffect, useState } from "react";
import { Receitas } from "../../models/Receitas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useThemeContext } from "../../styles/ThemeContext";
import { stylesHome } from "../../styles/stylesHome";


function HomeScreen()
{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [list, setList] = useState<Receitas[]>([]);
    const { theme, toggleTheme } = useThemeContext();
    const styles = stylesHome(theme);

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
                    <TouchableOpacity  style={styles.button_add_box} onPress={() => navigation.navigate('Create')}>
                        <Feather name="plus" size={24} color="#fff"   />
                    </TouchableOpacity>
                </View>
                
                <Item data={list}/>
            </View>
        </SafeAreaView>
    )
}


export default HomeScreen;