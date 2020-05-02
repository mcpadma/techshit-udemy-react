import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/item';

const initList = [
  { name: "tomato", calories: 20},
  { name: "rice", calories: 40},
  { name: "chocolate", calories: 100}
]

function App() {
  const [list, setList] = useState(initList);
  const removeUnhealthyHandle = (e) =>{
    //const copyList = {...list};
    const filteredList = list.filter( v => v.calories < 50);
    setList(filteredList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
       {
         list.map((v,k) => {
          //  return <Item name = {v.name} calorie = {v.calories} key={k}></Item>
          return <Item item = {v} key={`${k}${v.name}${v.calories}`}></Item>
         })
       }
       <button className="remove-button" onClick = {removeUnhealthyHandle}> Remove Unhealthy</button>
      </header>
    </div>
  );
}

export default App;
