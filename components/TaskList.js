import React from "react";
import { FlatList, View, StyleSheet, Button } from "react-native";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onEdit, onSort }) {
  return (
    <View>
      <View style={styles.sortContainer}>
        <Button title="Prioridade ↑" onPress={() => onSort("asc")} />
        <Button title="Prioridade ↓" onPress={() => onSort("desc")} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={onDelete} onEdit={onEdit} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
