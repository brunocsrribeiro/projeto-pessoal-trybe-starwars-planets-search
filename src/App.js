import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
