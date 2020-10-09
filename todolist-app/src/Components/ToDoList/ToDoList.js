import React, {useState} from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Añadir Tarea"
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        /> Has 'Enter' para agregar
      </form>
    );
  }

function Todo({ todo,index, completeTodo, removeTodo }) {
    return (
        <div
          className="todo"
          style={{textDecoration: todo.isCompleted ? "line-through" : "",backgroundColor: todo.isCompleted ? "grey":"" }}
        >
          {todo.text}
          <div>
            <button onClick={() => completeTodo(index)}  style={{display: todo.isCompleted ? "none":""}}>Completado</button>
            <button onClick={() => removeTodo(index)}>x</button>
          </div>
        </div>
      );
  }


const ToDoList = () => {

  const [todos, setTodos] = useState([
    { text: 'Nothing',isCompleted: false },
    { text: 'Red Panda',isCompleted: false }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>

      <div>
        <div>
        <TodoForm addTodo={addTodo} />
        </div>
    </div>

      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}          
      </div>
      
    </>
  )
}

export default ToDoList;