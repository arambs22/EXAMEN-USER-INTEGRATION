import { useEffect, useState } from 'react';
import Card from './components/Card';
import NavigationBar from '../../shared/NavigationBar';
import '../../shared/NavigationBar.css';

const Dashboard = () => {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (value) => {
    if (typeof value === 'string') {
      setFilter(value);
    }
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <NavigationBar title={<p>Usuarios Registrados</p>}>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <input
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
          onChange={(e) => handleFilterChange(e.target.value)}
          type="text"
          placeholder="Filtrar por nombre"
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: 'repeat(4, 1fr)', gap: "10px" }}>
        {filteredUsers.map((user) => (
          <div key={user.id} style={{ padding: '1%' }}>
            <Card user={user} />
          </div>
        ))}
      </div>
      
    </NavigationBar>
  );
};

export default Dashboard;