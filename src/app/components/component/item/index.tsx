
import { Receitas } from "@/src/app/models/Receita";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import Card from "../card";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/app";

type props =
{
    data: Receitas[],
}

function Item({data}: props)
{

    const render = ({ item }:{ item: Receitas }) => 
    {
        return(
              <View style={styles.card} >
                <Card title={item.title} description={item.descrition} />
            </View>
        )
    };

    return(
         <View style={{ flex: 1 }} >
            <FlatList
            data={data}
            renderItem={render}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}


export default Item;