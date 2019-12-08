import React from "react";
import Navbar from "./Navbar";
import Routes from "../routes";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTH: false
    };
  }

  componentDidMount = () => {
    const isTH = this.getIsTokenHolder();
    this.setState({ isTH });
  };

  getIsTokenHolder = () => {
    return true;
  };

  render() {
    const { drizzle, drizzleState } = this.props;
    const { isTH } = this.state;
    return (
      <div>
        <Navbar journalist={isTH} />
        <Routes drizzle={drizzle} drizzleState={drizzleState} />
      </div>
    );
  }
}

export default LandingPage;
