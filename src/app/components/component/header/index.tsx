
import {FlatList,  StyleSheet,  Text, TouchableOpacity, View} from "react-native";
import { Feather, Foundation } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation, useRouter } from "expo-router";

import { useThemeContext } from "@/src/app/styles/ThemeContext";
import Dropdown from "@/components/dropdown";
type Props=
{
    title: string
    isMain: boolean
}

function Header({title, isMain}: Props)
{
    const { theme, toggleTheme } = useThemeContext();
    const styles = style(theme);
    const router = useRouter();

    const onOpenGraph = () =>
    {
        router.push('/components/graphscreen/graph');
    }

    return(
        <View  style={styles.container}>

             {
                !isMain ?
                 <TouchableOpacity  style={styles.box_back}  onPress={() => router.back()}>
                    <Feather name="arrow-left" size={24} color={theme.colors.paragraph_extra} />
                </TouchableOpacity>
                :
                <View style={styles.box_back} ></View>
            }

           <View  style={styles.box_center}>
             <Text  style={styles.header_title}>{title}</Text>
           </View>

           <View  style={styles.box_option}  >
            {
                !isMain ?
                <View></View>
                :

                <Dropdown
                    options={[
                        {
                        label: 'Tema',
                        icon:  <Feather name="sun" size={24} color={theme.colors.paragraph_extra }   />,
                        onPress: () => toggleTheme(),
                        },
                        {
                        label: 'Analise',
                        icon:  <Foundation name="graph-pie" size={24} color={theme.colors.paragraph_extra }   />,
                        onPress: () => onOpenGraph(),
                        },
                    ]}
                    />
            }
           </View>

             
        </View>
    )
}


export default Header;

const style = (theme: any) => StyleSheet.create({
 container:
    {
        padding: 15,
        flexDirection:"row",
        height:'10%',
        // backgroundColor: theme.colors.background,
    },
    box_center:
    {
        width:'33.33%',
        justifyContent:"center",
        alignItems:"center"
    },
    box_back:
    {
        width:'33.33%',
        justifyContent:"center",
    },
    box_option:
    {
        width:'33.33%',
        justifyContent:"center",
        alignItems:"flex-end",
         overflow: 'visible',
    },
    header_title:
    {
        fontSize:20,
        fontWeight:"600",
        color: theme.colors.paragraph_extra,
    }

});
