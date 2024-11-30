import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TaskForm({ onSubmit, editingTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    } else {
      resetForm();
    }
  }, [editingTask]);

  const resetForm = () => {
    setName("");
    setDescription("");
    setPriority(1);
  };

  const handleSubmit = () => {
    onSubmit({ name, description, priority, id: editingTask?.id });
    resetForm();
  };

  // Ícones para os diferentes níveis de prioridade
  const priorityIcons = [
    { name: "flag", color: "#ff4d4d" }, // Alta prioridade
    { name: "flag", color: "#ffd700" }, // Média prioridade
    { name: "flag", color: "#4caf50" }, // Baixa prioridade
  ];

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Tarefa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.priorityContainer}>
        {["Alta", "Média", "Baixa"].map((level, index) => (
          <Pressable
            key={index}
            style={[
              styles.priorityButton,
              priority === index + 1 && styles.selectedPriority,
            ]}
            onPress={() => setPriority(index + 1)}
          >
            <Icon
              name={priorityIcons[index].name}
              size={30}
              color={priority === index + 1 ? priorityIcons[index].color : "#d3d3d3"}
            />
            <Text
              style={[
                styles.priorityText,
                priority === index + 1 && styles.selectedPriorityText,
              ]}
            >
              {level}
            </Text>
          </Pressable>
        ))}
      </View>
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  priorityButton: {
    alignItems: "center",
    padding: 8,
  },
  selectedPriority: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  priorityText: {
    color: "#000", // Default text color
  },
  selectedPriorityText: {
    color: "#fff",
  },
});
