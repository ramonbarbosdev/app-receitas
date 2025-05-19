
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link } from "expo-router";
import Header from "./components/component/header";
import { styles } from "./styles";


function Index()
{

    return(
        <View style={styles.container} >
            {/* <Header title=""/> */}
             <TouchableOpacity style={styles.button}>
                <Link style={styles.button_title}  href="/components/homescreen" >Entrar</Link>    
            </TouchableOpacity>     
        </View>
    )
}


export default Index;