
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { styles } from "./styles";
import Header from "../component/header";
import Card from "../component/card";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../..";


function CreateRecipeScreen()
{
 
    return(
        <View style={styles.container} >
            <Header title="New" isMain={false} />
           
        </View>
    )
}


export default CreateRecipeScreen;