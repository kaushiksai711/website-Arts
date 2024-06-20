import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/signup');
            if (response.data==='exist'){
              History('/login',{state:{id:email}})
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            alert('Error fetching users. Please try again later.');
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/admin/addUser', {
                name, gender, email, mobile, username, password
            });
            alert(response.data.message);
            fetchUsers(); // Refresh the user list
            setName('');
            setGender('');
            setEmail('');
            setMobile('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Error adding user. Please try again later.');
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/admin/deleteUser/${userId}`);
            alert(response.data.message);
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleAddUser} className="card-body">
                <div className="signup">
                    <p>
                        Name:&nbsp;
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
                    </p>
                    <p>
                        Gender:&nbsp;
                        <label><input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female</label>
                    </p>
                    <p>
                        Email:&nbsp;
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                    </p>
                    <p>
                        Mobile No.:&nbsp;
                        <input type="tel" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter your mobile number" required />
                    </p>
                    <br />
                    <p>
                        Username:&nbsp;
                        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" required />
                    </p>
                    <p>
                        Password:&nbsp;
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a password" required />
                    </p>
                    <p>
                        Confirm Password:&nbsp;
                        <input type="password" name="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
                    </p>
                    <input type="submit" value="ADD" />
                </div>
            </form>

            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span>{user.name} - {user.email}</span>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Admin;
