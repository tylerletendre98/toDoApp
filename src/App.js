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
    console.log(this.state.toDos);
  };
  render() {
    return (
      <div className="App">
        <dir>
          <Header />
          <ToDoForm addToDo={this.addToDo} />
        </dir>
      </div>
    );
  }
}

export default App;
