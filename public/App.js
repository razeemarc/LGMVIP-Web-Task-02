import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <div>Voxia</div>
        <button  className="get-users-button" onClick={getUsers} disabled={loading}>
          Get Users
        </button>
      </div>
      <h2>Welcome to the User Card </h2>

      <div className="users-grid">
        {loading ? (
          <div className="loader"></div>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt="User Avatar" width="100" height="100" />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
