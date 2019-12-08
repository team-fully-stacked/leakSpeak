import React from "react";
import Mint from "./Mint";
import Issue from "./Issue";
import {Card} from "semantic-ui-react"

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
      <Card centered={true}>
        <Card.Content textAlign="center">
        <h1>{orgName}</h1>
        <h2>{tokens}</h2>
        </Card.Content>
        <Mint minter={this.mintTokens} />
        <Issue issuer={this.issueToken} />
      </Card>
    );
  }
}

export default Org;