import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '@/src/app/styles/ThemeContext';
import { styleFab } from '@/src/app/styles/styleFab';

type Props = {
  onPress: () => void;
  style?: ViewStyle;
};

export default function FAB({ onPress, style }: Props) {
  const { theme } = useThemeContext();
  const styles = styleFab(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.fab]} 
    >
      <Ionicons name="add" size={28} color={theme.colors.button_text} />
    </TouchableOpacity>
  );
}

