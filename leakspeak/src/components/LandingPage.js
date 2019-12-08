import React from "react";
import Navbar from "./Navbar";
import Routes from "../routes";
import {Card} from "semantic-ui-react"

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
        <Card>
        <Routes drizzle={drizzle} drizzleState={drizzleState} />
        </Card>
      </div>
    );
  }
}

export default LandingPage;
