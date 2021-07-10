import "./displayTodos.css";

const DisplayTodos = (props) => {
  console.log(props.toDos);
  if (props.toDos.length === 0) {
    return (
      <div>
        <h3>You have nothing to do!</h3>
      </div>
    );
  } else {
    return (
      <div>
        <div class="row">
          <div class="col"></div>
          <div class="col-3">
            <div className="todo-map">
              {props.toDos.map((todo) => {
                return (
                  <div className>
                    <div className="todo-container">
                      <div className="todo-title">
                        <h4>{todo.title}</h4>
                      </div>
                      <div>
                        <p>{todo.description}</p>
                      </div>
                      <div>
                        <p>{todo.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    );
  }
};

export default DisplayTodos;
