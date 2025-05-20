import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Entypo, Feather } from "@expo/vector-icons";

interface StepInputProps {
  title: string;
  placeholder: string;
  steps: string[];
  onAdd: (step: string) => void;
  onRemove: (index: number) => void;
}

export default function StepInput({ title, placeholder, steps, onAdd, onRemove }: StepInputProps) {
  const [step, setStep] = useState("");

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
            <Entypo name="plus" size={20} color="#eff0f3"   />
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
            <Text style={{ flex: 1 }}>{index + 1}. {item}</Text>
            <TouchableOpacity onPress={() => onRemove(index)}>
              <Feather name="trash-2" size={20} color="#2a2a2a"   />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
