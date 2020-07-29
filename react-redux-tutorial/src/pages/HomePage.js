import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const balance = useSelector(state => state.balance);

  return (
    <div>
      <h1>Home Page</h1>
      <h1>Balance: {balance}</h1>
    </div>
  );
}

export default HomePage;
