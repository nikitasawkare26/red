import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../store/userSlice';
import '../App.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (name.trim() && email.trim() && password.trim()) {
      const currentDate = new Date();
      dispatch(registerUser({ id: Date.now(), name, email,password }));
      setName('');
      setEmail('');
      setPassword('');
      console.log(`Registration Data: Name: ${name}
                   Email: ${email}
                   Date: ${currentDate}`);
      window.alert('User registered successfully!');
    }else{
        window.alert('Please enter valid name, email and password.');
    }
    
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name" 
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password" 
        required
      />

      <button onClick={handleRegister} >Register</button>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterForm;