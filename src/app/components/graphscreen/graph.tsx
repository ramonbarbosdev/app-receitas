import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../styles/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../component/header';

function Graph() {
    const { theme, toggleTheme } = useThemeContext();
    const styles = style(theme);

    return (
        <SafeAreaView style={styles.container}>
             <Header title="Analise" isMain={false} />
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
