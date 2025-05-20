
import {FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons'; // Se estiver usando Expo

import { RootStackParamList } from "@/src/app";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import Header from "../component/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { deleteById } from "../../services/recipeService";

type RecipeRouteProp = RouteProp<RootStackParamList, 'Recipe'>;

function Recipe()
{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    const route = useRoute<RecipeRouteProp>();
    const {objeto} = route.params;
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
    const closeDropdown = () => dropdownVisible && setDropdownVisible(false);

    const onEdit = () =>
    {
        navigation.navigate('Create', { id: objeto.id })
    }

    const onDelete = async () =>
    {
        
        await deleteById(objeto.id);
        navigation.navigate("Home");
    };

    return(
        <TouchableWithoutFeedback onPress={closeDropdown}>
            <SafeAreaView style={{ flex: 1 }}>
            <View  style={styles.container}>

                <Header title="Receitas" isMain={false} />

                <View style={styles.box}>

                    <View style={styles.box_title}>
                       <View style={styles.box_title_1}>
                             <Text style={styles.title_main}>
                                <Feather name="codepen" size={24} color="#2a2a2a"   />
                            </Text>
                            <Text style={styles.title_main}>
                                Modo de preparo
                            </Text>
                       </View>

                       {/*  dropdow */}
                       <TouchableOpacity  style={styles.box_title_2} onPress={(e) => {e.stopPropagation?.(); toggleDropdown();}}>
                            <Text style={styles.title_main}>
                                <FontAwesome5 name="ellipsis-v" size={20} color="#2a2a2a"   />
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
                            <Text style={styles.box_recipe_child_1_text}>{objeto.title}</Text>
                        </View>

                        <View style={styles.box_recipe_child_2}>
                            <Text style={styles.box_recipe_child_2_text}>{objeto.descrition}</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
        
        
    )
}


export default Recipe;