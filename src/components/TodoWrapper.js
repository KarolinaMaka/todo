import React, { useContext, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../TodoContext";
import { useNavigate } from "react-router-dom";

export const TodoWrapper = () => {
  // const navigate = useNavigate();

  ///const handleMotivationClick = () => {
  // navigate("/motivation");
  // };

  const {
    todos,
    addNewTodo,
    removeTodo,
    toggleTodoComplete,
    toggleTodoEdit,
    updateTodoTask,
    loadAllTodos,
  } = useContext(TodoContext);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    loadAllTodos(savedTodos);
  }, [loadAllTodos]);

  const handleAddTodo = (todo) => {
    addNewTodo(todo);
    updateLocalStorage([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const handleDeleteTodo = (id) => {
    removeTodo(id);
    updateLocalStorage(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    toggleTodoComplete(id);
    updateLocalStorage(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (id) => {
    toggleTodoEdit(id);
  };

  const handleEditTask = (task, id) => {
    updateTodoTask(task, id);
    updateLocalStorage(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateLocalStorage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="TodoWrapper">
      <h1>Zadania do wykonania!</h1>
      <TodoForm addTodo={handleAddTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={handleEditTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={handleDeleteTodo}
            editTodo={handleEditTodo}
            toggleComplete={handleToggleComplete}
          />
        )
      )}
      <button
        type="submit"
        className="todo-btn"
        onClick={handleMotivationClick}
      >
        Potrzebujesz motywacji?
      </button>
    </div>
  );
};
