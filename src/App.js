import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Components/Todo/Todo";
import db from "./firebase";
import firebase from "firebase/compat/app";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the app loads, we need to listen to the database and fetch new todos as they get added or removed

  useEffect(() => {
    // this code here.... fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().task));
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <form className="App">
      <h1>Hey Programmers 🚀</h1>

      <FormControl>
        <InputLabel>✅ Write a Task</InputLabel>
        <Input onChange={(e) => setInput(e.target.value)} value={input} />
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        onClick={addTodo}
        variant="contained"
      >
        Add The Task
      </Button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </form>
  );
}

export default App;
