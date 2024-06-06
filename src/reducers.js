// src/reducers.js

import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  EDIT_TODO,
  EDIT_TASK,
  LOAD_TODOS,
} from "./actions";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuidv4(),
          task: action.payload,
          completed: false,
          isEditing: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_COMPLETE:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      );
    case EDIT_TASK:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.task, isEditing: !todo.isEditing }
          : todo
      );
    case LOAD_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
