import { createStore } from "redux";

function reducer(state, action) {
  switch (action.type) {
    case "SET_FONT_FAMILY":
      return { ...state, fontFamily: action.payload };
    case "SET_FONT_COLOR":
      return { ...state, color: action.payload };
    case "SET_FONT_STYLE":
      return { ...state, fontStyle: action.payload };
    case "SET_FONT_WEIGHT":
      return { ...state, fontWeight: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

const initialState = {
  fontFamily: "Arial",
  color: "black",
  fontStyle: "normal",
  fontWeight: "normal",
  text:
    "Lorem ipsum dolor sit amet consectetur adipiscing. elit Nulla sollicitudin sem et ante luctus sodales. Vivamus mi eros, fringilla et felis vitae, efficitur efficitur justo. Praesent dolor mauris, ultrices vel justo ac, sagittis"
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
