import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LogIn = () => {
  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const { signIn } = useAuth();

  const performLogin = (evt) => {
    evt.preventDefault();
    signIn(loginCredentials.username, loginCredentials.password);
    setLoginCredentials(init);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          value={loginCredentials.username}
          onChange={onChange}
          placeholder="User Name"
          id="username"
        />
        <input
          value={loginCredentials.password}
          onChange={onChange}
          placeholder="Password"
          id="password"
        />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
};

export default LogIn;
