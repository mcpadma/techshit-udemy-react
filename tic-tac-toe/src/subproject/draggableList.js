import React, { useState, useEffect } from "react";

const initList = [1, 2, 3, 4, 5, 6];

function DraggableList() {
  const [list, setList] = useState(initList);
  const [draggedItem, setDraggedItem] = useState(null);

  function onDragStartHandle(e, index) {
    setDraggedItem(list[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }
  function onDragOverHandle(index) {
    const draggedOverItem = list[index];
    if (draggedOverItem === draggedItem) {
      return;
    }
    const items = list.filter(item => item != draggedItem);
    items.splice(index, 0, draggedItem);
    setList(items);
  }
  return (
    <div>
      <h1>Draggable List</h1>
      <ul>
        {list.map((item, idx) => (
          <li
            key={idx}
            className="item-style"
            onDragOver={() => onDragOverHandle(idx)}
          >
            <div draggable onDragStart={e => onDragStartHandle(e, idx)}>
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DraggableList;
