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
    const { orgName, tokens } = this.getName();
    this.setState({ orgName, tokens });
  };

  mintTokens = n => {
    const { tokens } = this.state;
    this.setState({ tokens: tokens + n });
  };

  issueToken = () => {
    const { tokens } = this.state;
    this.setState({ tokens: --tokens });
  };

  render() {
    const { orgName, tokens, mint, issue } = this.state;
    const { handleClose, mintToken, isssueToken } = this;
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
