import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import '../index.css'; // Import your CSS file

function Login(props) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const { setUser } = useContext(UserContext);

    const handleSubmit = () => {
        setUser({ username, password });
    };

    return (
        <div className="login-container"> {/* Add the class name for styling */}
            <h2>Login</h2>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
            />
            <input
                type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
