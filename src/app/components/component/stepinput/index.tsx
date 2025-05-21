import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { useThemeContext } from "@/src/app/styles/ThemeContext";
import { stylesStep } from "@/src/app/styles/stylesStep";

interface StepInputProps {
  title: string;
  placeholder: string;
  steps: string[];
  onAdd: (step: string) => void;
  onRemove: (index: number) => void;
}

export default function StepInput({ title, placeholder, steps, onAdd, onRemove }: StepInputProps) {
  const [step, setStep] = useState("");

   const { theme, toggleTheme } = useThemeContext();
    const styles = stylesStep(theme);

  const handleAdd = () =>
  {
    if (step.trim() !== "") {
      onAdd(step.trim());
      setStep("");
    }
  };

  return (
    <View>
      <Text style={styles.text_main}>
        {title}
      </Text>

      <View  style={styles.box_input}>
         <TextInput
            placeholder={placeholder}
            value={step}
            onChangeText={setStep}
            style={styles.input_list}
        />

        <TouchableOpacity    onPress={handleAdd}  style={styles.button_list}  >
            <Entypo name="plus" size={20} color={theme.colors.button_text}   />
        </TouchableOpacity>
      </View>

     

      <FlatList
        data={steps}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ flex: 1 ,color:theme.colors.paragraph_extra}}>{index + 1}. {item}</Text>
            <TouchableOpacity onPress={() => onRemove(index)}>
              <Feather name="trash-2" size={20} color={theme.colors.button_text}    />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
