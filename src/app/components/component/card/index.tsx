
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons'; // Se estiver usando Expo
import { Link, useNavigation } from "expo-router";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/app";

type Props=
{
    title: string
    description: string
}

function Card({title, description}: Props)
{   
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return(
        <View  style={styles.container} >

            <View style={styles.card_header}>
               
                <View style={styles.card_header_box_1}>
                     <Text style={styles.card_header_box_title_1}>{title}</Text>
                </View>

                <TouchableOpacity style={styles.card_header_box_2} onPress={() => navigation.navigate('Recipe')}>
                    <Text style={styles.card_header_box_title_2}>Ver mais</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.card_body}>
                 <Text style={styles.card_body_text} >
                        {description.length > 270 ? description.substring(0, 270) + '...' : description}
                </Text>
            </View>

            <View style={styles.card_footer}>

                 <View style={styles.card_footer_box_1}>
                    <Text style={styles.card_footer_title}>Tags</Text>
                 </View>

                 <View style={styles.card_footer_box_2}>
                    <View style={styles.card_footer_box_2_content}>
                         <Text style={styles.card_footer_box_2_content_text}>Courage</Text>
                    </View>
                    <View style={styles.card_footer_box_2_content}>
                         <Text style={styles.card_footer_box_2_content_text}>Power</Text>
                    </View>
                    <View style={styles.card_footer_box_2_content}>
                         <Text style={styles.card_footer_box_2_content_text}>Love</Text>
                    </View>
                   
                 </View>
            </View>
             
        </View>
    )
}


export default Card;