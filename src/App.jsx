import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePassword = () => {
    if (!username) {
      setErrorMessage('Harap masukkan username terlebih dahulu.');
      return;
    }

    const symbol = /^[a-zA-Z0-9~!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]+$/;
    if (!symbol.test(username)) {
      setErrorMessage('Username hanya boleh berisi karakter alphanumeric dan simbol.');
      return;
    }

    const randomStrings = Math.random().toString(36).substring(2, 15);
    const generatedPassword = `${username}_${randomStrings}`;
    setPassword(generatedPassword);
    setErrorMessage('');
  };

  return (
    <div className="container">
      <h1>Username Password Generator</h1>
      <label className="label" htmlFor="username">Username</label>
      <input
        type="text"
        className="input"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="button" onClick={generatePassword}>
        Generate Password
      </button>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {password && (
        <div className="generated-password">
          <h4>Generated Password:</h4>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
