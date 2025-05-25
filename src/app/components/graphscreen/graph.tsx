import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../styles/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/header';
import BarCustom from '@/components/barcustom';
import mapTagsFrequencia from '@/components/mapTagsFreque';
import { useReceitas } from '../../hooks/useReceita';
import AreaCustom from '@/components/areacustom';

function Graph() {
    const { theme, toggleTheme } = useThemeContext();
    const styles = style(theme);

     const { data, isLoading, isError } = useReceitas();
    
    if (isLoading) return <ActivityIndicator size="large" color="#007AFF" />;
    if (isError) return <Text style={styles.error}>Erro ao carregar dados.</Text>;

    const frequencias = mapTagsFrequencia(data);

    return (
        <SafeAreaView style={styles.container}>
             <Header title="Analise" isMain={false} />

             <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                 <View style={styles.scrollItems}>
                    <BarCustom data={frequencias}/>
                    <AreaCustom data={frequencias}/>
                 </View>
               
             </ScrollView>
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
    },
     error:
     {
        color: 'red',
        padding: 20,
    },
    scroll:
    {
        flex: 1,
    },
    scrollItems:
    {
        gap: 20, 
        flexDirection: 'column',
    },
})
