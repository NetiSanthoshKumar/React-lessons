import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
    setFilteredUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchClick = () => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch API with Search Button</h2>
      <p>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </p>
      <ol>
        {filteredUsers.map((value) => (
          <li key={value.id}>
            {value.name}, {value.email}, {value.phone}
          </li>
        ))}
      </ol>
    </div>
  );
}
