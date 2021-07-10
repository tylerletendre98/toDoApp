const DisplayTodos = (props) => {
  //   console.log(props.toDos);
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
};

export default DisplayTodos;
