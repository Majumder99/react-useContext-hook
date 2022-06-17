import React, { useContext } from "react";
import { ThemeContext } from "./App";
const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyle}>Function Theme</div>;
};

export default FunctionContextComponent;