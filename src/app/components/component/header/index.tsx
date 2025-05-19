
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link } from "expo-router";
import { styles } from "./styles";

type Props=
{
    title: string
    rote: string
    title_button: string
}

function Header({title, rote, title_button}: Props)
{

    return(
        <View  style={styles.container_header}>
            <Text>{title}</Text>
             <Link href="/" >{title_button}</Link>         
        </View>
    )
}


export default Header;