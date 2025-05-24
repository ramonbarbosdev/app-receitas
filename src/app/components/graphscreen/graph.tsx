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

    const dados: any[] = [
    { id: 1, title: 'Salada', tags: ['vegano', 'rápido'] },
    { id: 2, title: 'Frango Assado', tags: ['low-carb'] },
    { id: 3, title: 'Smoothie', tags: ['vegano', 'low-carb', 'rápido'] },
    // ...
    ];
    const frequencias = mapTagsFrequencia(dados);
    console.log(frequencias);

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
