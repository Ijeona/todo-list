import React from "react";
import "./TodoItem.css";

function ToDoItem(props) {
    const { todo, index, completeToDo, removeTodo } = props;
    return (
        <div className={`todo${todo.isCompleted ? "complete" : ""}`}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>);
}

export default ToDoItem;