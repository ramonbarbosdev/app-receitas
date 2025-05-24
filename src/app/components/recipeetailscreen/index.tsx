
import {FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons'; // Se estiver usando Expo

import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "../component/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { useNavigation } from "expo-router";
import { deleteById } from "../../services/recipeService";
import { useThemeContext } from "../../styles/ThemeContext";
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
    const styles = style(theme);

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


const style = (theme: any) => StyleSheet.create({
 safeArea: {
        flex: 1,
        backgroundColor: theme.colors.background_extra,  
    },
    container:
    {
        backgroundColor:theme.colors.background_extra,
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,
    },
    box:
    {
        backgroundColor:theme.colors.card,
        height:'80%',
        borderRadius:15,
        shadowColor: theme.colors.color_shadow,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    box_title:
    {
        height:'10%',
        padding:10,
        flexDirection:'row',
       
    },
    box_title_1:
    {
        flexDirection:'row',
        alignItems: "center",
        width:'90%',

    },
    box_title_2:
    {
        width:'10%',
        justifyContent:"center",
        alignItems:"center",
    },
    title_main:
    {
        color: theme.colors.paragraph_extra,
        fontSize: 20,
        fontWeight:'700',
        marginLeft:10
    },
    box_recipe:
    {
        height:'80%',
        padding:20,

    },
    box_recipe_child_1:
    {
        height:'5%',
        justifyContent:"center",
        marginBottom:20
    },
    box_recipe_child_1_paragraph:
    {
        color: theme.colors.paragraph_extra,
        fontSize: 18,
        fontWeight:'700'
    },
    box_recipe_child_2:
    {
        height:'10%',
        marginBottom:15
    },
    text:
    {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 4,
        color: theme.colors.paragraph_extra,
    },
     box_recipe_child_3:
    {
        height:'30%',
        marginBottom:15
    },
    box_recipe_child_paragraph:
    {
        color: theme.colors.paragraph_extra,
        fontSize: 14,
        fontWeight:'700'
    },

    dropdown:
    {
        backgroundColor: theme.colors.card,
        position: "absolute",
        top: 40,
        right: 10,
        zIndex: 10,
        borderWidth: 1,
        borderColor:  theme.colors.background_extra,
        borderRadius: 5,
        shadowColor: theme.colors.color_shadow,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },

    dropdown_item:
    {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.background_extra,
    },

    dropdown_text:
    {
        fontSize: 16,
        color: theme.colors.paragraph_extra
    },

});
