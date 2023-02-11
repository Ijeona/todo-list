import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import "./App.css";

function App() {
  //State
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  //Actions 

  const addToDo = (text) => {
    const newTodos = [...todos, { text: text, incomplete: faslse }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <ToDoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeToDo={removeToDo} />
        ))}
        <ToDoForm addTodo={addToDo} />
      </div>
    </div>
  );
}
export default App;










