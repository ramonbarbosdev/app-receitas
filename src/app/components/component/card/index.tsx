
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation } from "expo-router";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/app";

type Props=
{
   objeto: any
}

function Card({objeto}: Props)
{   
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return(
        <View  style={styles.container} >

            <View style={styles.card_header}>
               
                <View style={styles.card_header_box_1}>
                     <Text    adjustsFontSizeToFit numberOfLines={1} style={styles.card_header_box_title_1}>{objeto.title}</Text>
                </View>

                <TouchableOpacity style={styles.card_header_box_2} >
                    <AntDesign name="right" size={20} color="#2a2a2a"   />
                </TouchableOpacity>
                
            </View>


            <View style={styles.card_footer}>

                 <View style={styles.card_footer_box_1}>
                    <Text style={styles.card_footer_title}>Tags</Text>
                 </View>

                 <View style={styles.card_footer_box_2}>
                    {
                        objeto.tags?.map((tag: string, index: number) => (
                        <View key={index} style={styles.card_footer_box_2_content}>
                            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.card_footer_box_2_content_text}>
                            {tag}
                            </Text>
                        </View>
                        ))
                    }
                 </View>
            </View>
             
        </View>
    )
}


export default Card;