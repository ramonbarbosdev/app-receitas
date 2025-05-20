
import { Receitas } from "@/src/app/models/Receitas";
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
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const render = ({ item }:{ item: Receitas }) => 
    {
        return(
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Recipe', { objeto: item })}>
                <Card  objeto={item}/>
            </TouchableOpacity>
        )
    };

    return(
        <FlatList
        data={data}
        renderItem={render}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
                            <View style={{ alignItems: 'center', marginTop: 40 }}>
                            <Text style={{ color: '#888' }}>Nenhuma receita encontrada</Text>
                            </View>
                            }
    />
  );

}


export default Item;