import React from 'react';
import Authenticated from './Authenticated';
import { useAuth } from '../hooks/useAuth';
import Unauthenticated from './Unauthenticated';
import LogIn from './Login';

const ContentContainer = () => {
  const { authenticated } = useAuth();
  return (
    <>
      {authenticated ? (
        <Authenticated />
      ) : (
        <>
          <LogIn />
          <Unauthenticated />
        </>
      )}
    </>
  );
};

export default ContentContainer;
