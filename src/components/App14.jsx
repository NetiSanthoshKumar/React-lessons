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

  const handleFilter = (text) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearch(text);
    handleFilter(text);
  };

  const handleSearchClick = () => {
    handleFilter(search);
  };

  return (
    <div>
      <h1>App14</h1>
      <h2>Live Search + Button Filter</h2>
      <p>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleInputChange}
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
