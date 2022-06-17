import { useState } from "react";
import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
export const ThemeContext = React.createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleContext = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleContext}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
