
import  { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();

  const handleRegister = () => {
    register(username, password);
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <br></br>
      <Link to="/">
      <button >login</button>
      </Link>
    </div>
  );
}

export default Registration;
