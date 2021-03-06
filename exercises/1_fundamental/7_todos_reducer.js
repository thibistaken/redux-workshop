class Store {
  constructor(red, initialState) {
    this.reducer = red;
    this.state = initialState;
  }
  dispatch(dispatchedAction) {
    this.state = this.reducer(this.state, dispatchedAction);
  }
}

// Insert your code after this line
let reducer = function(state, action) {
  let todoList = state.todos.slice();
  let trimList = state.todos.slice(1);
  let reverseTodoList = state.todos.slice().reverse();

  switch (action.type) {
    case "new":
      return { todos: todoList.concat(state.todo) };
    case "reverseTodos":
      return { todos: reverseTodoList };
    case "deleteFirst":
      return { todos: trimList };
    default:
      return state;
  }
};
// HINT: Create a new array without the first element of someArray:  someArray.slice(1)
// HINT: Create a new array that's the reverse of an existing array: someArray.slice().reverse()

// Insert your code before this line

let store = new Store(reducer, { todos: [] });

store.dispatch({ type: "new", todo: "Buy milk" });
store.dispatch({ type: "new", todo: "Buy eggs" });
store.dispatch({ type: "new", todo: "Learn javascript" });
store.dispatch({ type: "reverseTodos" });
store.dispatch({ type: "deleteFirst" });

if (store.state.todos.length !== 2) {
  throw new Error("Wrong number of todos");
}
console.log("Exercise finished");
