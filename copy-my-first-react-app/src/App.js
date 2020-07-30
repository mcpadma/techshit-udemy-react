import React, { useState } from "react";
import "./App.scss";
import { observer, useAsObservableSource } from "mobx-react-lite";

const App = observer(() => {
  const store = useAsObservableSource({
    count: 1,
    addOne() {
      store.count++;
    },
    subOne() {
      store.count--;
    }
  });
  function addOneHandle() {
    store.addOne();
  }
  function subOneHandle() {
    store.subOne();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>count:{store.count}</h1>
        <button onClick={addOneHandle}>Add one</button>
        <button onClick={subOneHandle}>Sub one</button>
      </header>
    </div>
  );
});

export default App;
