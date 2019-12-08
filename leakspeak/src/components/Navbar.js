import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { journalist } = props;
  return (
    <div
      className="navbar"
      style={{
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
          <Link>
        <Button>Upload Data</Button>
      </Link> )}

    </div>
  );
};

export default Navbar;
