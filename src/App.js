import React from "react";
import { useState } from "react";
import "./App.css";
// import reactDom from "react-dom";

let date = new Date();
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
          <h2>
            Whoop, it's &nbsp;
            {date.toLocaleDateString(date, {
              weekday: "long",
            })}
            🌝 ☕
          </h2>
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
            }}
          ></i>
        </div>
        <div className="todos">
          <div className="active-list list">
            <h3 className="text-center underline">Active</h3>
            {mainTodo.map((todoIteration, mapIndex) => {
              console.info(mainTodo);
              if (!todoIteration.todoStatus && !todoIteration.todoDeleted) {
                return (
                  <div className="todo active" key={mapIndex}>
                    <div className="left">
                      <input
                        type="checkbox"
                        name=""
                        checked={todoIteration.todoStatus}
                        id={todoIteration.id}
                        onChange={(changeEvent) => {
                          setMainTodo(
                            mainTodo.filter((filterIteration) => {
                              if (
                                parseInt(changeEvent.target.id) ===
                                filterIteration.id
                              ) {
                                filterIteration.todoStatus =
                                  changeEvent.target.checked;
                              }
                              return true;
                            })
                          );
                        }}
                      />
                      <p>{todoIteration.todoValue}</p>
                    </div>
                    <div className="right">
                      <i
                        className="fas fa-times"
                        data-id={todoIteration.id}
                        onClick={(deleteClickEvent) => {
                          setMainTodo(
                            mainTodo.filter((deleteFilterIteration) => {
                              if (
                                todoIteration.id ===
                                parseInt(deleteClickEvent.target.dataset.id)
                              ) {
                                todoIteration.todoDeleted = true;
                              }
                              return true;
                            })
                          );
                        }}
                      ></i>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="completed list">
            <h3 className="text-center underline">Completed</h3>

            {mainTodo.map((todoIteration, filterIndex) => {
              if (todoIteration.todoStatus && !todoIteration.todoDeleted) {
                return (
                  <div className="todo complete" key={filterIndex}>
                    <div className="left">
                      <input
                        type="checkbox"
                        name=""
                        id={todoIteration.id}
                        checked={todoIteration.todoStatus}
                        onChange={(changeEvent) => {
                          setMainTodo(
                            mainTodo.filter((filterIteration) => {
                              if (
                                parseInt(changeEvent.target.id) ===
                                filterIteration.id
                              ) {
                                filterIteration.todoStatus =
                                  changeEvent.target.checked;
                              }
                              return true;
                            })
                          );
                        }}
                      />
                      <p>{todoIteration.todoValue}</p>
                    </div>
                    <div className="right">
                      <i
                        className="fas fa-times"
                        data-id={todoIteration.id}
                        onClick={(deleteClickEvent) => {
                          setMainTodo(
                            mainTodo.filter((deleteFilterIteration) => {
                              if (
                                deleteFilterIteration.id ===
                                parseInt(deleteClickEvent.target.dataset.id)
                              ) {
                                deleteFilterIteration.todoDeleted =
                                  !deleteFilterIteration.todoDeleted;
                              }
                              return true;
                            })
                          );
                        }}
                      ></i>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="deleted list">
            <h3 className="text-center underline">Deleted</h3>

            {mainTodo.map((todoIteration, filterIndex) => {
              if (todoIteration.todoDeleted) {
                return (
                  <div className="todo delete" key={filterIndex}>
                    <div className="left">
                      <input
                        type="checkbox"
                        name=""
                        id={todoIteration.id}
                        checked={todoIteration.todoStatus}
                        onChange={(changeEvent) => {
                          setMainTodo(
                            mainTodo.filter((filterIteration) => {
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
                      <p
                        className={todoIteration.todoStatus ? "completed" : ""}
                      >
                        {todoIteration.todoValue}
                      </p>
                    </div>
                    <div className="right">
                      <i
                        className="fas fa-times"
                        data-id={todoIteration.id}
                        onClick={(deleteClickEvent) => {
                          setMainTodo(
                            mainTodo.filter((deleteFilterIteration) => {
                              if (
                                todoIteration.id ===
                                parseInt(deleteClickEvent.target.dataset.id)
                              ) {
                                todoIteration.todoDeleted = false;
                              }
                              return true;
                            })
                          );
                        }}
                      ></i>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
