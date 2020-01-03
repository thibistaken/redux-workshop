import { createStore } from "redux";

let reducer = function(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: state.todos.concat(action.todo) };
    case "REVERSE_TODOS":
      return { todos: state.todos.slice().reverse() };
    default:
      return state;
  }
};

let initialState = { todos: [] };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
