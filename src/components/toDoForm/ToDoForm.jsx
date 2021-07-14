import { Component } from "react";

class ToDoForm extends Component {
  state = {
    catergory: "",
    description: "",
    date: "",
    isCompleted: false,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      catergory: this.state.catergory,
      description: this.state.description,
      date: this.state.date,
      isCompleted: this.state.isCompleted,
    };
    console.log(todo);
    this.props.addToDo(todo);
    this.setState();
  };
  render() {
    return (
      <div>
        <div class="row">
          <div class="col"></div>
          <div class="col-5">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="todo-form">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Title
                  </label>
                  <select
                    class="form-select"
                    name="catergory"
                    aria-label="Default select example"
                    onChange={this.handleChange}
                  >
                    <option selected>Choice a catergory</option>
                    <option value="School">School</option>
                    <option value="Work">Work</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Yard Work">Yard Work</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    What needs to get done
                  </label>
                  <textarea
                    name="description"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Something that needs to get done"
                    onChange={this.handleChange}
                  ></textarea>
                  <div class="mb-3">
                    <label htmlFor="" className="form-label">
                      What date needs to be done by:
                    </label>
                    <input
                      type="date"
                      name="date"
                      id=""
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <input type="submit" name="" id="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col"></div>
        </div>
      </div>
    );
  }
}
export default ToDoForm;
