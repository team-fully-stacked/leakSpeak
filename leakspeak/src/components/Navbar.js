import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './522a024b-0532-416c-bd65-8828f4cd3f4a_200x200.png';

const Navbar = props => {
  const { journalist } = props;
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <ToastContainer />
      <div style={{ height: "100px" }}>
        <img src={logo} alt="leakSpeak makes the world aware" />
      </div>
      <div
        className="navbar"
        style={{
          paddingTop: "26px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <Link to="/organization">
          <Button><Icon name="globe" />Organization Page</Button>
        </Link>
        {journalist ? (
          <div>
            <Link to="/contracts">
              <Button> <Icon name="setting" />Manage Contracts</Button>
            </Link>
            <Link to="/journalist">
              <Button><Icon name="briefcase" />Journalist Page</Button>
            </Link>
          </div>
        ) : (
          <></>
        )}
        <Link to="/source">
          <Button><Icon name="users" />Submit Data</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
