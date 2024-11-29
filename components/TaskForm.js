import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";

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
            <Text style={styles.priorityText}>{level}</Text>
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
    padding: 8,
    borderWidth: 1,
    backgroundColor:"#a6a6a6",
    borderColor: "#a6a6a6",
    borderRadius: 4,
  },
  selectedPriority: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  priorityText: {
    color: "#fff",
  },
});
