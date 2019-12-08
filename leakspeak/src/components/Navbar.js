import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { journalist } = props;
  return (
    <div className="navbar">
      <Link to="/org">
        <Button>Organization Page</Button>
      </Link>
      {journalist ? (
        <Link to="journalist">
          <Button>Manage Contracts</Button>
        </Link>
      ) : (
        <Button>Upload Data</Button>
      )}
    </div>
  );
};

export default Navbar;
