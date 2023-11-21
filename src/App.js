import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterAction";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <h1>Counter App</h1>
      <p>Count Value: {count}</p>
      <div className="button-container">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
