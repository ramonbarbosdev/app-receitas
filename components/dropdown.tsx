import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useThemeContext } from '@/src/app/styles/ThemeContext';

type DropdownOption = {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
};

type Props = {
  options: DropdownOption[];
};

const Dropdown = ({ options }: Props) => {
  const { theme } = useThemeContext();
  const styles = style(theme);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const closeDropdown = () => setDropdownVisible(false);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.container} onPress={toggleDropdown}>
        <FontAwesome5 name="ellipsis-v" size={20} color={theme.colors.paragraph_extra} />
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => {
                option.onPress();
                closeDropdown();
              }}
            >
              <View style={styles.itemContent}>
                {option.icon && <View style={styles.icon}>{option.icon}</View>}
                <Text style={styles.itemText}>{option.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;

const style = (theme: any) => StyleSheet.create({
  wrapper: {
    position: 'relative', 
    zIndex: 999,
  },
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: 45, 
    right: 0,
    backgroundColor: theme.colors.card_extra,
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    width: 200,
    zIndex: 1000,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    color: theme.colors.paragraph_extra,
    fontSize: 16,
  },
});
