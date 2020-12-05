import "regenerator-runtime/runtime";
import { createSlice } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },

  // createSlice allows mutating the state directly
  reducers: {
    fetchTodoSuccess: (state, action) => {
      state.todos = action.payload;
    },
    fetchTodoFailure: (state, action) => {
      throw new Error(action.payload);
    },
    addTodoSuccess: (state, action) => {
      state.todos.push(action.payload);
    },
    addTodoFailure: (state, action) => {
      throw new Error(action.payload);
    },
    deleteTodoSuccess: (state, action) => {
      const target = state.todos.findIndex(
        (todo) => todo._id === action.payload
      );

      state.todos.splice(target, 1);
    },
    deleteTodoFailure: (state, action) => {
      throw new Error(action.payload);
    },
    toggleTodoSuccess: (state, action) => {
      const target = state.todos.findIndex(
        (todo) => todo._id === action.payload
      );

      state.todos[target].completed = !state.todos[target].completed;
    },
    toggleTodoFailure: (state, action) => {
      throw new Error(action.payload);
    },
  },
});

export const {
  fetchTodoSuccess,
  fetchTodoFailure,
  addTodoSuccess,
  addTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
  toggleTodoSuccess,
  toggleTodoFailure,
} = rootReducer.actions;

export const fetchTodos = (qs) => (dispatch) => {
  fetch(`/todos?completed=${qs}`, {
    qs: { completed: qs },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchTodoSuccess(data));
    })
    .catch(fetchTodoFailure);
};

export const addTodo = (title) => async (dispatch) => {
  fetch("/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, completed: false }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(addTodoSuccess(data));

      fetchTodos();
    })
    .catch(addTodoFailure);
};

export const deleteTodo = (id) => (dispatch) => {
  fetch(`/delete?_id=${id}`, { method: "DELETE", qs: { _id: id } }).then(() => {
    dispatch(deleteTodoSuccess(id));
    fetchTodos();
  });
};

export const toggleTodo = (id) => (dispatch) => {
  fetch(`/toggle?_id=${id}`, {
    method: "POST",
    qs: { _id: id },
  }).then(() => {
    dispatch(toggleTodoSuccess(id));

    dispatch(fetchTodos());
  });
};

export default rootReducer.reducer;
