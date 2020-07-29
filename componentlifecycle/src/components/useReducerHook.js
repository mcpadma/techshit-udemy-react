import React, { useReducer } from "react";

const initState = {
  count: 0
};
function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function UseReducerHooks() {
  const [state, dispatch] = useReducer(reducerFunction, initState);

  function plusOne(){
    dispatch({type:"INCREMENT"})
  }
  function minusOne(){
    dispatch({type:"DECREMENT"})
  }
  return (
    <div>
      <h1>UseReducerHooks Example</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={plusOne}>Plus one</button>
      <button onClick={minusOne}>Minus one</button>
    </div>
  );
}
export default UseReducerHooks;
