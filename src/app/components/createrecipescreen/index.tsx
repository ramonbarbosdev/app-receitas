
import {FlatList, Text, TouchableOpacity, View, TextInput, StyleSheet} from "react-native";
import Header from "../component/header";
import Card from "../component/card";
import { useNavigation, useRouter } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StepInput from "../component/stepinput";
import { useThemeContext } from "../../styles/ThemeContext";
import { useRoute } from "@react-navigation/native";
import { useReceitaById, useSaveReceita } from "../../hooks/useReceita";

function Create()
{
    const [title, setTitle] = useState("");
    const [description, setDescrition] = useState("");
    const [task, setTask] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    const route = useRoute();
    const router = useRouter();
    const { id } = (route.params ?? {}) as { id?: number };

    const { theme, toggleTheme } = useThemeContext();
    const styles = style(theme);

    const { data, isLoading, isError } = useReceitaById(id ?? 0); 
    const mutation = useSaveReceita();

    const onSave = async () =>
    {
        if (title.trim() === "" || description.trim() === "") {
            console.log("Preencha todos os campos");
            return;
        }
        const object = {
            id: id ?? undefined,
            title,
            description,
            task,
            tags
        };

         mutation.mutate(object, {
            onSuccess: () => router.back(),
            onError: (error) => console.error("Falha ao salvar:", error),
        });
    };

    useEffect(() => {
        if (data) {
          setTitle(data.title);
          setDescrition(data.description);
          setTask(data.task || []);
          setTags(data.tags || []);
        }
  }, [data]);


    return(
          <SafeAreaView style={styles.safeArea}>
              <View style={styles.container} >

               <Header title={id ? "Edição" : "Novo"} isMain={false} />

                <View style={styles.form}>
                    <View style={styles.input_box}>
                        <Text style={styles.input_title}>Titulo</Text>
                        <TextInput onChangeText={setTitle} style={styles.input} value={title} />
                    </View>

                    <View style={styles.input_box}>
                        <Text style={styles.input_title}>Descrição</Text>
                         <TextInput onChangeText={setDescrition} style={styles.input} value={description}/>
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
    form:
    {
        height: '80%',
        backgroundColor:theme.colors.background_extra,

    },
    input_box:
    {
        marginBottom: 10
    },
    input_title:
    {
        color:theme.colors.paragraph_extra,
       marginBottom: 5,
       fontSize:15,
       fontWeight:'500'
    },
    input:
    {
        borderWidth: 1,
        borderColor: theme.colors.paragraph_extra,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width:'100%',
        color: theme.colors.paragraph_extra,

    },
    button:
    {
        
        backgroundColor:'#ff8e3c',
        height: 50,
        borderRadius: 7,
        justifyContent: "center",
        alignItems:"center",

    },
    button_title:
    {
        color: theme.colors.button_text,
        fontSize:20,
        fontWeight:'500'
    }
 
    
});
