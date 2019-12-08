import React from "react";
import Mint from "./Mint";
import Issue from "./Issue";

class Org extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: "",
      tokens: 0
    };
  }

  getData = () => {
    return {
      orgName: "BBC",
      tokens: 100
    };
  };

  componentDidMount = () => {
    const { orgName, tokens } = this.getData();
    this.setState({ orgName, tokens });
  };

  mintTokens = n => {
    let { tokens } = this.state;
    n = parseInt(n)
    this.setState({ tokens: tokens + n });
  };

  issueToken = (adress) => {
    let { tokens } = this.state;
    this.setState({ tokens: tokens - 1 });
  };

  render() {
    const { orgName, tokens } = this.state;
    return (
      <div>
        <h1>{orgName}</h1>
        <h2>{tokens}</h2>
        <Mint minter={this.mintTokens} />
        <Issue issuer={this.issueToken} />
      </div>
    );
  }
}

export default Org;
