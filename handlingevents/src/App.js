import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import useList from './hooks/useList';
import OnChangeEvent from './components/onChangeEvent';

const initList = [
  { name: "tomato", calories: 20},
  { name: "rice", calories: 40},
  { name: "chocolate", calories: 100}
];

function App() {
  // const [list, setList] = useState(initList);
  const items = useList(initList);
  const [editable, setEditable] = useState(false);

  const removeUnhealthyHandle = (e) => {
    //const copyList = {...list};
    // const filteredList = list.filter( v => v.calories < 50);
    // setList(filteredList);
  }

  function removeItemHandle(e)  {
    console.dir(e.target.name);
    // const filteredList = list.filter( v => v.name != e.target.name);
    // setList(filteredList);
    items.removeItem(e.target.name);
  }
  function onDoubleClickHandle() {
    setEditable(true);
  }
  function keyPressHandle(e,i) {
    console.dir(e.key);
    if(e.key === "Enter"){
      console.log("Enter Pressed")
      setEditable(!editable);
      // const copyList = [...list];
      // copyList[i].name = e.target.value;
      items.saveItem(i, e.target.value);
    }
  }
//  function removeUnhealthyHandle(e) {
//     //const copyList = {...list};
//     const filteredList = list.filter( v => v.calories < 50);
//     setList(filteredList);
//   }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
       {
         items.list.map((v,k) => {
        //  list.map((v,k) => {
          //  return <Item name = {v.name} calorie = {v.calories} key={k}></Item>
          return <Item 
          item = {v} 
          key={`${k}${v.name}${v.calories}`} 
          onClick={removeItemHandle}
          editable={editable}
          onDoubleClick={onDoubleClickHandle}
          onKeyPress={keyPressHandle}
          index = {k}></Item>
         })
       }
        {/* <button className="remove-button" onClick = {removeUnhealthyHandle}> Remove Unhealthy</button> */}
      <OnChangeEvent></OnChangeEvent>
      </header>
    </div>
  );
}

export default App;
