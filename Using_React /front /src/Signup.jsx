import React, { useState } from 'react';

function Signup1() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          gender,
          email,
          mobile,
          username,
          password,
        }),
      });

      if (response.ok) {
        alert('Successfully Signed Up');
      } else {
        alert('Error signing up');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up');
    }
  };

  return (
    <main>
      <div className="container">
        <div className="links">
          <h2 className="l1"><a href="/login">Login</a></h2>
        </div>
        <form onSubmit={handleSubmit} className="card-body">
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
            <input type="submit" value="Signup" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup1;
