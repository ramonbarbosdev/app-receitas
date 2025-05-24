
import {FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons'; // Se estiver usando Expo

import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "../component/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { useNavigation } from "expo-router";
import { deleteById } from "../../services/recipeService";
import { useThemeContext } from "../../styles/ThemeContext";
import { stylesRecipe } from "../../styles/stylesRecipe";
import { useRouter, useSearchParams } from "expo-router/build/hooks";
import { Receitas } from "../../models/Receitas";
import { useObjectStore } from "../../zutand";
import { useDeleteReceita, useReceitas } from "../../hooks/useReceita";
import Dropdown from "@/components/dropdown";



function Recipe()
{
    const { object } = useObjectStore() as { object: Receitas };
    const router = useRouter();
    const { theme } = useThemeContext();
    const styles = stylesRecipe(theme);

    const deleteMutation = useDeleteReceita();

    const onEdit = () =>
    {
        router.push({ pathname: '/components/createrecipescreen', params: { id: object.id } });
    }

    const onDelete = useCallback(async () => {
        try
        {
            await deleteMutation.mutateAsync(object.id);
            router.back(); // ou router.replace("/alguma-rota") se quiser navegar
        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
    }, [object]);

    return(
        <SafeAreaView style={styles.safeArea}>
            <View  style={styles.container}>

                <Header title="Receitas" isMain={false} />

                <View style={styles.box}>

                    <View style={styles.box_title}>
                    <View style={styles.box_title_1}>
                            <Text style={styles.title_main}>
                                <Feather name="codepen" size={24} color={ theme.colors.paragraph_extra}   />
                            </Text>
                            <Text style={styles.title_main}>
                                Modo de preparo
                            </Text>
                    </View>

                     <Dropdown
                        options={[
                            {
                            label: 'Editar',
                            icon:  null  ,
                            onPress: () => onEdit(),
                            },
                            {
                            label: 'Deletar',
                            icon: null   ,
                            onPress: () => onDelete(),
                            },
                        ]}
                    />
                    
                    </View>


                    <View style={styles.box_recipe}>
                        <View style={styles.box_recipe_child_1}>
                            <Text  adjustsFontSizeToFit numberOfLines={1} style={styles.box_recipe_child_1_paragraph}>{object.title}</Text>
                        </View>

                        <View style={styles.box_recipe_child_2}>
                            <Text style={styles.box_recipe_child_paragraph}>Descrição:</Text>
                            <Text style={styles.text}>{object.description}</Text>
                        </View>
                    

                        <View style={styles.box_recipe_child_3}>
                            <Text style={styles.box_recipe_child_paragraph}>Passos:</Text>
                            {
                                object.task?.map((step: string, index: number) => (
                                <Text key={index} style={styles.text}>
                                    {index + 1}. {step}
                                </Text>
                                ))
                            }
                        </View>

                    
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}


export default Recipe;