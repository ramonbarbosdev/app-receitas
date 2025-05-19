
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { styles } from "./styles";
import Header from "../component/header";


function HomeScreen()
{

    return(
        <View style={styles.container} >
            <Header title="Inicio" isMain={true} />
            <Text>Receitas</Text>
        </View>
    )
}


export default HomeScreen;