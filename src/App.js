import React, { useReducer } from "react";
import "./App.css";
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: 0 };
    default:
      return { count: 0 };
  }
  // if (action.type === "INCREMENT")
  //   return { count: state.count + action.amount };
  // if (action.type === "DECREMENT")
  //   return { count: state.count - action.amount };
  // if (action.type === "RESET") return { count: 0 };
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", amount: 1 });
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", amount: 1 });
        }}
      >
        Subtract 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", amount: 5 });
        }}
      >
        Add 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
