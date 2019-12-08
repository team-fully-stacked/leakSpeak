import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { journalist } = props;
  return (
    <div
      className="navbar"
      style={{
<<<<<<< HEAD
        paddingTop: "26px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
    >
      <Link to="/org">
        <Button>Organization Page</Button>
      </Link>
      {journalist ? <Link to="journalist"><Button>Manage Contracts</Button> </Link>: <></>}
      <Link to="source">
=======
        paddingTop: '26px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Link to="/journalist">
        <Button>Journalist Page</Button>
      </Link>
      <Link to="/organization">
        <Button>Organization Page</Button>
      </Link>
      {journalist ? (
        <Link to="contracts">
          <Button>Manage Contracts</Button>
        </Link>
      ) : (
>>>>>>> 7dd066f7f2b5d5ce75673c85c675c2be3586b7f9
        <Button>Upload Data</Button>
      </Link>
    </div>
  );
};

export default Navbar;
