
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { styles } from "./styles";
import Header from "../component/header";
import Card from "../component/card";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../..";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";
import { getById, save } from "../../services/recipeService";
import StepInput from "../component/stepinput";



type CreateRouteProp = RouteProp<RootStackParamList, "Create">;

function Create()
{
    const [title, setTitle] = useState("");
    const [descrition, setDescrition] = useState("");
    const [step, setStep] = useState("");
    const [steps, setSteps] = useState<string[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<CreateRouteProp>();
    const { id } = route.params ?? {};

    const onEdit = async () =>
    {
        if (id)
        {
            const recipe = await getById(id);
            if (recipe) {
                setTitle(recipe.title);
                setDescrition(recipe.descrition);
                 setSteps(recipe.steps || []);
            }
        }
    }

    const onSave = async () =>
    {
        if (title.trim() === "" || descrition.trim() === "") {
            console.log("Preencha todos os campos");
            return;
        }

        const data = {
            id: id ?? Date.now(),
            title,
            descrition,
            steps,
        };

        await save(data);
        navigation.navigate("Home");
    };

    useEffect(() => {

    onEdit();
    }, [id]);

    return(
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.container} >

               <Header title={id ? "Editar Receita" : "Nova Receita"} isMain={false} />

                <View style={styles.form}>
                    <View style={styles.input_box}>
                        <Text style={styles.input_title}>Titulo</Text>
                        <TextInput onChangeText={setTitle} style={styles.input} value={title}/>
                    </View>

                    <View style={styles.text_area_box}>
                        <Text style={styles.input_title}>Descrição</Text>
                         <TextInput onChangeText={setDescrition} style={styles.text_area} value={descrition}/>
                    </View>

                     <StepInput
                            steps={steps}
                            onAdd={(newStep) => setSteps(prev => [...prev, newStep])}
                            onRemove={(index) => setSteps(prev => prev.filter((_, i) => i !== index))}
                        />

                    <TouchableOpacity style={styles.button} onPress={onSave}>
                        <Text style={styles.button_title}>Criar</Text>
                    </TouchableOpacity>

                </View>
            
            </View>
          </SafeAreaView>
      
    )
}


export default Create;