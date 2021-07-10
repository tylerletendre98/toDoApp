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
        <div>
          {props.toDos.map((todo) => {
            return (
              <div>
                <div>
                  <h4>{todo.title}</h4>
                </div>
                <div>
                  <p>{todo.description}</p>
                </div>
                <div>
                  <p>{todo.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default DisplayTodos;
