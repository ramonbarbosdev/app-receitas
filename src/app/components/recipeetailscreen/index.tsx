
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation } from "expo-router";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/app";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "../component/header";
import { SafeAreaView } from "react-native-safe-area-context";

type RecipeRouteProp = RouteProp<RootStackParamList, 'Recipe'>;

function Recipe()
{
    const route = useRoute<RecipeRouteProp>();
    const {objeto} = route.params;

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View  style={styles.container}>

                <Header title="Receitas" isMain={false} />

                <View style={styles.box}>

                    <View style={styles.box_title}>
                        <Text style={styles.title_main}>Modo de preparo</Text>
                    </View>

                    <View style={styles.box_empty}></View>

                    <View style={styles.box_recipe}>
                        <View style={styles.box_recipe_child_1}>
                            <Text style={styles.box_recipe_child_1_text}>{objeto.title}</Text>
                        </View>

                        <View style={styles.box_recipe_child_2}>
                            <Text style={styles.box_recipe_child_2_text}>{objeto.descrition}</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
        
    )
}


export default Recipe;