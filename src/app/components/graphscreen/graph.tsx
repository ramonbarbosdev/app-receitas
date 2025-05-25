import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../styles/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/header';
import BarCustom from '@/components/barcustom';
import mapTagsFrequencia from '@/components/mapTagsFreque';

function Graph() {
    const { theme, toggleTheme } = useThemeContext();
    const styles = style(theme);

 const receitas = [
  { id: 1, tags: ["rápido"], title: "Salada" },
  { id: 1, tags: ["rápido"], title: "Salada" },
  { id: 1, tags: ["rápido"], title: "Salada" },
  { id: 1, tags: ["rápido"], title: "Salada" },
  { id: 2, tags: ["low-carb"], title: "Frango Assado" },
  { id: 3, tags: ["vegano"], title: "Smoothie" },
  { id: 4, tags: ["low-carb"], title: "Macarrao" },
  { id: 5, tags: ["vegano"], title: "Barbecue" },
  { id: 5, tags: ["vegano"], title: "Barbecue" },
  { id: 6, tags: ["vegano"], title: "Peixe" },
];

    const frequencias = mapTagsFrequencia(receitas);

    return (
        <SafeAreaView style={styles.container}>
             <Header title="Analise" isMain={false} />

             <View>
                <BarCustom data={frequencias}/>
             </View>
        </SafeAreaView>
    )
}

export default Graph;

const style = (theme: any) => StyleSheet.create({
    container: {
       backgroundColor:theme.colors.background_extra,
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,
    },
    text: {
        color: theme.colors.paragraph_extra,
        fontSize: 18,
        fontWeight: '600',
    }
})
