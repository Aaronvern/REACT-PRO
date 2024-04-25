import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../index.css'; // Import your CSS file

function Profile(props) {

    const { user } = useContext(UserContext);

    if (!user) return (<div style={{
        color:'white',
    }}><h2>please login</h2></div>); // Adjusted text for clarity

    return (
        <div className="profile-container"> {/* Add the class name for styling */}
            <h2>Welcome, <mark><u>{user.username}</u></mark></h2>
            <p>i fetched your name by using useContext</p>
        </div>
    );
}

export default Profile;
