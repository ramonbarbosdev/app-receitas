
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useThemeContext } from "./styles/ThemeContext";
import { stylesHome } from "./styles/stylesHome";
import { Receitas } from "./models/Receitas";
import Item from "./components/component/item";
import Header from "./components/component/header";
import FAB from "./components/component/fab";
import { getAll } from "./services/recipeService";


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
            const response = await getAll();
            const itens = response.data;
            console.log(itens)
            // setList(itens)
            
        } catch (e) {
            console.error("Erro ao carregar dados", e);
        }
    }

    useEffect(() => {
        getData();
    },[list]);

    return(
       <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title="Inicio" isMain={true} />

               

                <FAB onPress={() => router.push('/components/createrecipescreen')} />
                            
                <Item data={list}/>
            </View>
        </SafeAreaView>
    )
}


export default HomeScreen;