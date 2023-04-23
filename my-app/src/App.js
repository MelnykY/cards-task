import CardList from "./components/CardList/CardList";
import { useState, useEffect } from "react";
import { getUsers } from "./services/mockapi";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <>
      <CardList users={users} />
      <GlobalStyle />
    </>
  );
}

export default App;
