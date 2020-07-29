import React from "react";
import { useSelector, useDispatch } from "react-redux";

function DepositPage() {
  const balance = useSelector(state => state.balance);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch({
      type: "DEPOSIT",
      payload: 10
    });
  }

  return (
    <div>
      <h1>Deposit Page</h1>
      <h2>Balance: {balance}</h2>
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
}

export default DepositPage;
