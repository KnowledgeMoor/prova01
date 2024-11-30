import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? task : t))
      );
    } else {
      setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]);
    }
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const sortTasks = (order) => {
    const sortedTasks = [...tasks].sort((a, b) =>
      order === "asc" ? a.priority - b.priority : b.priority - a.priority
    );
    setTasks(sortedTasks);
  };

  return (
    <View style={styles.container}>
      <TaskForm onSubmit={addTask} editingTask={editingTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onSort={sortTasks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:40,
    backgroundColor: "#f5f5f5",
  },
});
