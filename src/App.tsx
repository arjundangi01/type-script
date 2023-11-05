import React from "react";
import logo from "./logo.svg";
import  { ThemeContext } from "./context/test.context";
import ThemeContextProvider, { ThemeContext as test  } from "./context/test.context";
import Card from "./components/card";
// import {}
function App() {
  let value = React.useContext(ThemeContext);
  console.log(value);
  return (
    <div className="App">
      <ThemeContextProvider>
        <Card />
        {/* hellow world */}
      </ThemeContextProvider>
    </div>
  ); 
}

export default App;
