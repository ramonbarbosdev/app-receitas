
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


function Recipe()
{
    const { object } = useObjectStore() as { object: Receitas };
    const router = useRouter();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { theme, toggleTheme } = useThemeContext();
    const styles = stylesRecipe(theme);

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
    const closeDropdown = () => dropdownVisible && setDropdownVisible(false);

    const onEdit = () =>
    {
       router.push({ pathname: '/components/createrecipescreen', params: { id: object.id } });
    }

   const onDelete = useCallback(async () => {
    await deleteById(object.id);
    // navigation.goBack();
    }, [object]);

    return(
        <TouchableWithoutFeedback onPress={closeDropdown}>
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

                       {/*  dropdow */}
                       <TouchableOpacity  style={styles.box_title_2} onPress={(e) => {e.stopPropagation?.(); toggleDropdown();}}>
                            <Text style={styles.title_main}>
                                <FontAwesome5 name="ellipsis-v" size={20} color={ theme.colors.paragraph_extra}  />
                            </Text>
                       </TouchableOpacity>
                    </View>

                      {/* Dropdown visível */}
                    {dropdownVisible && (
                        <TouchableWithoutFeedback onPress={(e) => e.stopPropagation?.()}>
                            <View style={styles.dropdown}>
                                <TouchableOpacity style={styles.dropdown_item} onPress={onEdit}>
                                    <Text style={styles.dropdown_text}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.dropdown_item} onPress={onDelete}>
                                    <Text style={styles.dropdown_text}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    )}


                    <View style={styles.box_recipe}>
                        <View style={styles.box_recipe_child_1}>
                            <Text  adjustsFontSizeToFit numberOfLines={1} style={styles.box_recipe_child_1_paragraph}>{object.title}</Text>
                        </View>

                        <View style={styles.box_recipe_child_2}>
                            <Text style={styles.box_recipe_child_paragraph}>Descrição:</Text>
                            <Text style={styles.text}>{object.descrition}</Text>
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
        </TouchableWithoutFeedback>
        
        
    )
}


export default Recipe;