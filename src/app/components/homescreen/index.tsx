
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { styles } from "./styles";


function HomeScreen()
{

    return(
        <View style={styles.container} >

            <Text>Receitas</Text>
        </View>
    )
}


export default HomeScreen;