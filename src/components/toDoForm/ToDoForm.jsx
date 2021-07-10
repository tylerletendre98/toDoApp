import { Component } from "react";

class ToDoForm extends Component {
  state = {
    title: "",
    description: "",
    date: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    this.props.addToDo(todo);
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
                  <input
                    name="title"
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name of what needs to get done"
                    onChange={this.handleChange}
                  />
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
