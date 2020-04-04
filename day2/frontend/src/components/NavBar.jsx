import React from 'react';
import { useAuth } from '../hooks/useAuth';

const NavBar = () => {
  const auth = useAuth();
  return (
    <div>
      <button onClick={auth.signIn}>Sign In</button>
      {auth.user && <button onClick={auth.signOut}>Sign Out</button>}
    </div>
  );
};

export default NavBar;
