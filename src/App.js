import React from "react";
import { useState } from "react";
import "./App.css";
import reactDom from "react-dom";

function App() {
  const [mainTodo, setMainTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  return (
    <>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            type="text"
            value={currentTodo}
            onChange={(e) => setCurrentTodo(e.target.value)}
            placeholder="🖊️ Add item..."
          />
          <i
            className="fas fa-plus"
            onClick={() => {
              setMainTodo([
                ...mainTodo,
                { todoValue: currentTodo, todoStatus: false },
              ]);
              console.log(mainTodo);
            }}
          ></i>
        </div>
        <div className="todos">
          {mainTodo.map((todoIteration, mapIndex) => (
            <div className="todo" key={mapIndex}>
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{todoIteration.todoValue}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
