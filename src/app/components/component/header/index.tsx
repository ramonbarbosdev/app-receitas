
import {FlatList,  Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation, useRouter } from "expo-router";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useThemeContext } from "@/src/app/styles/ThemeContext";
import { stylesHeader } from "@/src/app/styles/stylesHeader";
import { StatusBar } from 'expo-status-bar';
type Props=
{
    title: string
    isMain: boolean
}

function Header({title, isMain}: Props)
{
    const { theme, toggleTheme } = useThemeContext();
    const styles = stylesHeader(theme);
    const router = useRouter();

    return(
        <View  style={styles.container}>

             {
                !isMain ?
                 <TouchableOpacity  style={styles.box_back}  onPress={() => router.back()}>
                    <Feather name="arrow-left" size={24} color={theme.colors.paragraph_extra} />
                </TouchableOpacity>
                :
                <View></View>
            }
            
          

           <View  style={styles.box_center}>
             <Text  style={styles.header_title}>{title}</Text>
           </View>

           <TouchableOpacity  style={styles.box_option}  onPress={toggleTheme}>
            {
                !isMain ?
                <View></View>
                :
                <View>
                    <Feather name="sun" size={24} color={theme.colors.paragraph_extra }   />
                </View>
            }
           </TouchableOpacity>

             
        </View>
    )
}


export default Header;