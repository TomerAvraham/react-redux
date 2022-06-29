import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { increment, addAmount } from "./redux/slices/counterSlice";

const App = () => {
  const state = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }

  function handleClickAmount() {
    dispatch(addAmount(123));
  }

  return (
    <div>
      <div>{state}</div>
      <button onClick={handleClick}>Deposit 500</button>
      <button onClick={handleClickAmount}>amount </button>
    </div>
  );
};

export default App;
