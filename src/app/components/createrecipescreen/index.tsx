
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { styles } from "./styles";
import Header from "../component/header";
import Card from "../component/card";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../..";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


function CreateRecipeScreen()
{
    const [title, setTitle] = useState("");
    const [descrition, setDescrition] = useState("");
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const onSave = async () => 
    {
        try
        {   
            const newData = {
                id: Date.now(),
                title,
                descrition,
            };

            const existing = await AsyncStorage.getItem('recipes');
            const recipes = existing ? JSON.parse(existing) : [];

            recipes.push(newData);
            console.log(recipes)

            if(title != "" || descrition != "")
            {
                await AsyncStorage.setItem('recipes', JSON.stringify(recipes));
                console.log("Receita salva com sucesso!");
                setTitle("");
                setDescrition("");
                navigation.navigate('Home')
            }
            else
            {
                console.log("Informe todos os campos!");
                
            }

            

        }
        catch (error)
        {
            console.error("Erro ao salvar a receita:", error);
        }
    }

    return(
        <View style={styles.container} >
            <Header title="New" isMain={false} />

            <View style={styles.form}>
                <View style={styles.input_box}>
                    <Text style={styles.input_title}>Titulo</Text>
                    <TextInput onChangeText={setTitle} style={styles.input}/>
                </View>

                <View style={styles.text_area_box}>
                    <Text style={styles.input_title}>Descrição</Text>
                    <TextInput onChangeText={setDescrition} style={styles.text_area}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={onSave}>
                    <Text style={styles.button_title}>Criar</Text>
                </TouchableOpacity>

            </View>
           
        </View>
    )
}


export default CreateRecipeScreen;