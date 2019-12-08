import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './522a024b-0532-416c-bd65-8828f4cd3f4a_200x200.png';

const Navbar = props => {
  const { journalist } = props;
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ToastContainer />

      <div style={{ height: '100px' }}>
        <img src={logo} />
      </div>
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
          <Link to="/contracts">
            <Button>Manage Contracts</Button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
