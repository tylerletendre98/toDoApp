import "./App.css";
import Header from "./components/header/header";
import ToDoForm from "./components/toDoForm/ToDoForm";
import React, { Component } from "react";

class App extends Component {
  state = {
    toDos: [],
  };
  addToDo = (todo) => {
    this.state.toDos.push(todo);
  };
  render() {
    return (
      <div className="App">
        <dir>
          <Header />
          <ToDoForm />
        </dir>
      </div>
    );
  }
}

export default App;
