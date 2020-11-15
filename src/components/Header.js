import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="header">
        <FontAwesomeIcon
          className="list-alt"
          icon={["far", "list-alt"]}
          size="2x"
        />
        Todo List
      </div>
    </>
  );
};

export default Header;
