import React, { createContext, useState, useContext } from 'react';

// Create context
const UserContext = createContext();

// Register component
const Register = () => {
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    alert('User registered!');
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleRegister}>Submit</button>
    </div>
  );
};

// Login component
const Login = () => {
  const { users } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setMessage(`Welcome ${user.name}`);
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Submit</button>
      <h3>{message}</h3>
    </div>
  );
};

// App21 component with context provider
const App21 = () => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div style={{ textAlign: 'center' }}>
        <h1>App21 - useContext Login/Register</h1>
        <Register />
        <Login />
      </div>
    </UserContext.Provider>
  );
};

export default App21;
