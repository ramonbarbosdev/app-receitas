
import {FlatList, Text, TouchableOpacity, View, TextInput} from "react-native";
import Header from "../component/header";
import Card from "../component/card";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getById, save } from "../../services/recipeService";
import StepInput from "../component/stepinput";
import { useThemeContext } from "../../styles/ThemeContext";
import { styleCreate } from "../../styles/stylesCreate";
import { useRoute } from "@react-navigation/native";

function Create()
{
    const [title, setTitle] = useState("");
    const [descrition, setDescrition] = useState("");
    const [task, setTask] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    const route = useRoute();
    const { id } = (route.params ?? {}) as { id?: number };

    const { theme, toggleTheme } = useThemeContext();
    const styles = styleCreate(theme);

    const onEdit = async () =>
    {
        if (id)
        {
            const recipe = await getById(id);
            if (recipe) {
                setTitle(recipe.title);
                setDescrition(recipe.descrition);
                setTask(recipe.task || []);
                setTags(recipe.tags || []);
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
            task,
            tags
        };

        await save(data);
    };

    useEffect(() => {

    onEdit();
    }, [id]);

    return(
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.container} >

               <Header title={id ? "Edição" : "Novo"} isMain={false} />

                <View style={styles.form}>
                    <View style={styles.input_box}>
                        <Text style={styles.input_title}>Titulo</Text>
                        <TextInput onChangeText={setTitle} style={styles.input} value={title}/>
                    </View>

                    <View style={styles.input_box}>
                        <Text style={styles.input_title}>Descrição</Text>
                         <TextInput onChangeText={setDescrition} style={styles.input} value={descrition}/>
                    </View>

                    <StepInput
                        title="Passo a Passo"
                        placeholder="Ex: Fazer feijão"
                        steps={task}
                        onAdd={(newStep) => setTask(prev => [...prev, newStep])}
                        onRemove={(index) => setTask(prev => prev.filter((_, i) => i !== index))}
                    />

                    <StepInput
                        title="Tags"
                        placeholder="Ex: Almoço"
                        steps={tags}
                        onAdd={(newStep) => setTags(prev => [...prev, newStep])}
                        onRemove={(index) => setTags(prev => prev.filter((_, i) => i !== index))}
                    />

                </View>

                 <TouchableOpacity style={styles.button} onPress={onSave}>
                    <Text style={styles.button_title}>{id ? "Editar" : "Criar"}</Text>
                </TouchableOpacity>
            
            </View>
          </SafeAreaView>
      
    )
}


export default Create;