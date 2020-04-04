import React, { useState, useContext, createContext } from 'react';
import { apiUtils } from '../utils/apiUtils';
import { authUtils } from '../utils/authUtils';

const authContext = createContext();
const URL = 'http://localhost:8080/security_war_exploded';

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const signIn = (username, password) => {
    const options = apiUtils.makeOptions('POST', true, {
      username: username,
      password: password,
    });
    return fetch(URL + '/api/login', options)
      .then((res) => apiUtils.handleHttpErrors(res))
      .then((res) => {
        authUtils.setToken(res.token);
        setAuthenticated(true);
      })
      .catch((error) => {
        if (error.status) {
          error.fullError.then((e) => alert(e.message));
        } else {
          alert('Network error');
        }
      });
  };

  const signOut = () => {
    authUtils.logout();
    setAuthenticated(false);
  };

  // Return the user object and auth methods
  return {
    authenticated,
    signIn,
    signOut,
  };
};
