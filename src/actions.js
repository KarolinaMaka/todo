// src/actions.js

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const EDIT_TODO = "EDIT_TODO";
export const EDIT_TASK = "EDIT_TASK";
export const LOAD_TODOS = "LOAD_TODOS";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id,
});

export const editTodo = (id) => ({
  type: EDIT_TODO,
  payload: id,
});

export const editTask = (task, id) => ({
  type: EDIT_TASK,
  payload: { task, id },
});

export const loadTodos = (todos) => ({
  type: LOAD_TODOS,
  payload: todos,
});
