
import { Receitas } from "@/src/app/models/Receitas";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import Card from "../card";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Link, useNavigation, useRouter } from "expo-router";
import { useObjectStore } from "@/src/app/zutand";

type props =
{
    data: Receitas[],
}

function Item({data}: props)
{
    const router = useRouter();

    function open(item: any)
    {
          useObjectStore.getState().setObject(item);
          router.push('/components/recipeetailscreen');
    }

    const render = ({ item }:{ item: Receitas }) => 
    {
        return(
              <TouchableOpacity style={""} onPress={() => open(item)}>
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