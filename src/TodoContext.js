// src/TodoContext.js

import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
  editTask,
  loadTodos,
} from "./actions";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNewTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleTodoComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const toggleTodoEdit = (id) => {
    dispatch(editTodo(id));
  };

  const updateTodoTask = (task, id) => {
    dispatch(editTask(task, id));
  };

  const loadAllTodos = (todos) => {
    dispatch(loadTodos(todos));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addNewTodo,
        removeTodo,
        toggleTodoComplete,
        toggleTodoEdit,
        updateTodoTask,
        loadAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
