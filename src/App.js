import React from "react";
import { useState } from "react";
import "./App.css";
// import reactDom from "react-dom";

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
                {
                  todoValue: currentTodo,
                  todoStatus: false,
                  todoDeleted: false,
                  id: Date.now(),
                  date: new Date(),
                },
              ]);
              console.log(mainTodo);
            }}
          ></i>
        </div>
        <div className="todos">
          <div className="active">
            <h3 className="text-center underline">Active</h3>
            {mainTodo.map((todoIteration, mapIndex) => {
              if (!todoIteration.todoStatus) {
                return (
                  <div className="todo" key={mapIndex}>
                    <div className="left">
                      <input
                        type="checkbox"
                        name=""
                        checked={todoIteration.todoStatus}
                        id={todoIteration.id}
                        onChange={(changeEvent) => {
                          // console.log(mainTodo);
                          // console.log("changeEvent.target.id");
                          // console.log(changeEvent.target.id);
                          setMainTodo(
                            mainTodo.filter((filterIteration) => {
                              // console.log("inside filter");
                              // console.log("filterIteration.id");
                              // console.log(filterIteration.id);
                              if (
                                parseInt(changeEvent.target.id) ===
                                filterIteration.id
                              ) {
                                filterIteration.todoStatus =
                                  changeEvent.target.checked;
                                return true;
                              }
                              return true;
                            })
                          );
                        }}
                      />
                      <p>{todoIteration.todoValue}</p>
                    </div>
                    <div className="right">
                      <i className="fas fa-times"></i>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="completed">
            <h3 className="text-center underline">Completed</h3>

            {mainTodo.map((todoIteration, filterIndex) => {
              if (todoIteration.todoStatus) {
                return (
                  <div className="todo" key={filterIndex}>
                    <div className="left">
                      <input
                        type="checkbox"
                        name=""
                        id={todoIteration.id}
                        checked={todoIteration.todoStatus}
                        onChange={(changeEvent) => {
                          // console.log(mainTodo);
                          // console.log("changeEvent.target.id");
                          // console.log(changeEvent.target.id);
                          setMainTodo(
                            mainTodo.filter((filterIteration) => {
                              // console.log("inside filter");
                              // console.log("filterIteration.id");
                              // console.log(filterIteration.id);
                              if (
                                parseInt(changeEvent.target.id) ===
                                filterIteration.id
                              ) {
                                filterIteration.todoStatus =
                                  changeEvent.target.checked;
                                return true;
                              }
                              return true;
                            })
                          );
                        }}
                      />
                      <p>{todoIteration.todoValue}</p>
                    </div>
                    <div className="right">
                      <i className="fas fa-times"></i>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="deleted ">
            <h3 className="text-center underline">Deleted</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
