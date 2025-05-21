
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation } from "expo-router";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/app";
import { useThemeContext } from "@/src/app/styles/ThemeContext";
import { stylesHeader } from "@/src/app/styles/stylesHeader";

type Props=
{
    title: string
    isMain: boolean
}

function Header({title, isMain}: Props)
{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { theme, toggleTheme } = useThemeContext();
    const styles = stylesHeader(theme);

    return(
        <View  style={styles.container}>
           <View  style={styles.box_back}>
             {
                !isMain ?
                <TouchableOpacity onPress={()=> navigation.goBack() }>
                    <Feather name="arrow-left" size={24} color={theme.colors.paragraph }   />
                </TouchableOpacity>
                :
                <View></View>
            }
           </View>

           <View  style={styles.box_center}>
             <Text  style={styles.header_title}>{title}</Text>
           </View>

           <View  style={styles.box_option}>
            {
                !isMain ?
                <View></View>
                :
                <TouchableOpacity onPress={toggleTheme}>
                    <Feather name="sun" size={24} color={theme.colors.paragraph }   />
                </TouchableOpacity>
            }
           </View>

             
        </View>
    )
}


export default Header;