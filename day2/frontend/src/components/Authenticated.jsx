import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { apiUtils } from '../utils/apiUtils';

const Authenticated = () => {
  const [dataFromServer, setDataFromServer] = useState('Loading...');
  const { signOut } = useAuth();

  useEffect(() => {
    apiUtils.fetchData().then((data) => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
};

export default Authenticated;
