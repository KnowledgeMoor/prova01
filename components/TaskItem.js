import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function TaskItem({ task, onDelete, onEdit }) {
  const priorityColors = ["#ff4d4d", "#ffd700", "#4caf50"];

  return (
    <View style={styles.item}>
      <View
        style={[
          styles.priorityIndicator,
          { backgroundColor: priorityColors[task.priority - 1] },
        ]}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{task.name}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      <View style={styles.actions}>
        <Button title="Editar" onPress={() => onEdit(task)} />
        <Button title="Excluir" onPress={() => onDelete(task.id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 4,
    elevation: 1,
  },
  priorityIndicator: {
    width: 10,
    height: 50,
    marginRight: 8,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "#666",
  },
  actions: {
    flexDirection: "row",
  },
});
