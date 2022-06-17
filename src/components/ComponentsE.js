import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";
const ComponentsE = () => {
  const firstName = useContext(UserContext);
  const lastName = useContext(ChannelContext);
  return (
    <div>
      {firstName} - {lastName};
    </div>
  );
};

export default ComponentsE;
