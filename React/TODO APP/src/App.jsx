import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const storageTodos = localStorage.getItem("TODOS");
    if (storageTodos === null) {
      return [];
    }
    return JSON.parse(storageTodos);
  });
  const [newTodo, setNewTodo] = useState("");
  const [query, setQuery] = useState("");

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      return todo.text.toLowerCase().includes(query.toLowerCase());
    });
  }, [todos, query]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (todo) => {
    setTodos(() => {
      return todos.filter((el) => el.id !== todo.id);
    });
  };

  const toggleTodo = (todo) => {
    setTodos(() => {
      return todos.map((el) => {
        if (todo.id === el.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      {/* HEADING */}
      <h1>TODO APP</h1>
      {/* FORM */}
      <form onSubmit={(e) => handleAddTodo(e)}>
        <label htmlFor="add-todo">
          ADD TODO:
          <input
            id="add-todo"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>
        <button>SAVE</button>
      </form>
      {/* LIST */}
      {todos.length === 0 ? (
        "NO TODOS"
      ) : (
        <>
          <label htmlFor="search-todo">
            Search Todos:
            <input
              id="search-todo"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <ul>
            {filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-list-item">
                <input
                  type="checkbox"
                  id="toggle-todo"
                  value={todo.completed}
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo)}
                />
                <p>{todo.text}</p>
                <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
