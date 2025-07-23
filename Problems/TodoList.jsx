import React, { useState } from 'react';

function TodoList() {

  const [todoItems, setTodoItems] = useState([]);
  const [inputText, setInputText] = useState("")

  const handleAddTodoItem = () => {
    if (inputText.length > 0) {
      setTodoItems([...todoItems, { id: Date.now().toString(36), text: inputText, completed: false }])
    }
    setInputText("");
  }

  const handleCheckboxChange = (itemId) => {
    const updatedTodoList = todoItems.map(item => item?.id === itemId ? { ...item, completed: !item?.completed } : item)
    setTodoItems(updatedTodoList)
  }

  const handleRemoveItem = (itemId) => {
    const removedTodoList = todoItems?.filter(item => item?.id !== itemId);
    setTodoItems([...removedTodoList])
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Enter todo" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
        <button onClick={handleAddTodoItem}>Add</button>
      </div>
      {todoItems && todoItems?.map((item) => (
        <ul key={item?.id}>
          <li>
            <input type="checkbox" id={item?.id} checked={item?.completed} name={item?.text} onChange={() => { handleCheckboxChange(item?.id) }}></input>
            <label htmlFor={item?.id} ><span className={item?.completed ? "strike" : ""}>{item?.text}</span></label>
            <button onClick={() => { handleRemoveItem(item?.id) }}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TodoList;