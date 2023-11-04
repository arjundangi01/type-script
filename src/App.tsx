import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context/test.context';
// import {}
function App() {
  let value = React.useContext(ThemeContext)
  console.log(value)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
