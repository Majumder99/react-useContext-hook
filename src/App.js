import React from "react";
import ComponentsC from "./components/ComponentsC";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const App = () => {
  return (
    <>
      <UserContext.Provider value={"Sourav"}>
        <ChannelContext.Provider value={"Majumder"}>
          <ComponentsC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
