
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { styles } from "./styles";
import Header from "../component/header";
import Card from "../component/card";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../..";


function HomeScreen()
{
     const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
 
    return(
        <View style={styles.container} >
            <Header title="Inicio" isMain={true} />

            <View style={styles.button_add}>
                <TouchableOpacity  style={styles.button_add_box} onPress={() => navigation.navigate('CreateRecipeScreen')}>
                     <Feather name="plus" size={24} color="#fff"   />
                </TouchableOpacity>
            </View>
            

            <View style={styles.card}>
                <Card title="Red" description="Red is a very emotionally & visually intense color that can actually have a physical effect on people by raising their metabolism, respiration, heart rate, as well as making them hungry. That combined by with the fact that red is very attention grabbing, you see red used in the branding of pretty much all fast food chains."/>
            </View>
        </View>
    )
}


export default HomeScreen;