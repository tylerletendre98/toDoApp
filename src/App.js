import "./App.css";
import Header from "./components/header/header";
import ToDoForm from "./components/toDoForm/ToDoForm";
import DisplayTodos from "./components/displayTodos/DisplayTodos";
import React, { Component } from "react";

class App extends Component {
  state = {
    toDos: [],
  };
  componentDidMount() {
    this.setState(this.state.toDos);
  }
  addToDo = (todo) => {
    this.state.toDos.push(todo);
    this.setState(this.state.toDos);
  };
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <ToDoForm addToDo={this.addToDo} />
          <DisplayTodos toDos={this.state.toDos} />
        </div>
      </div>
    );
  }
}

export default App;
