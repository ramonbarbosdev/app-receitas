
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation } from "expo-router";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/app";

type Props=
{
    title: string
    isMain: boolean
}

function Header({title, isMain}: Props)
{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return(
        <View  style={styles.container_header}>
           <View  style={styles.box_back}>
             {
                !isMain ?
                <TouchableOpacity onPress={()=> navigation.navigate('Home') }>
                    <Feather name="trash" size={24} color="#001858"   />
                </TouchableOpacity>
                :
                <View></View>
            }
           </View>

           <View  style={styles.box}>
             <Text  style={styles.header_title}>{title}</Text>
           </View>

           <View  style={styles.box}>

           </View>

             
        </View>
    )
}


export default Header;