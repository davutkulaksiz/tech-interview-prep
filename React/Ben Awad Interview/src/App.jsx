import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`https://randomuser.me/api?page=${page}&results=3`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(JSON.stringify(data, null, 2));
        setUsers(data.results);
      })
      .catch((err) => console.error(err));
  }, [page]);

  const getUserName = (user) => {
    const { first, last, title } = user.name;

    return `${title} ${first} ${last}`;
  };

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase the Counter
      </button>
      {/*       <div>
        <span>{info}</span>
      </div> */}
      {users.map((user) => (
        <div key={user.login.uuid}>
          <h2>{getUserName(user)}</h2>
          <img src={user.picture.large} alt="user" />
        </div>
      ))}
      <button onClick={() => setPage((page) => page - 1)}>Previous Page</button>
      <button onClick={() => setPage((page) => page + 1)}>Next Page</button>
    </>
  );
}

export default App;
