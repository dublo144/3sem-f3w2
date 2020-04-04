import React from 'react';
import { ProvideAuth } from './hooks/useAuth';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <ContentContainer />
      </ProvideAuth>
    </div>
  );
}

export default App;
