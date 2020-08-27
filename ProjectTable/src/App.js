import React from 'react';
import MyTable from './components/MyTable';

function App() {
  return (
  <MyTable totCols={10} totRows={10} textHeaders='Header'>
    Cell
  </MyTable>
  );
}

export default App;
