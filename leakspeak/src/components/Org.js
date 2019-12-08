import React from 'react';
import TokenForm from './TokenForm';
import Issue from './Issue';

class Org extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: '',
      orgAddress: '',
      tokens: 0,
    };
  }

  getData = () => {
    return {
      orgName: 'BBC',
      tokens: 100,
    };
  };

  //0x8d165F7bDB9AaFD6Fd6DD2Aa6D7E2a9b390fC1B4

  componentDidMount = async () => {
    const { orgName, tokens } = this.getData();
    const orgAddress = (await this.props.drizzle.web3.eth.getAccounts())[0];

    this.setState({ orgName, tokens, orgAddress });
  };

  //Transfer tokens from org to journalist
  transferTokens = async (journalistAddress, numTokens) => {
    const { orgAddress } = this.state;

    console.log(journalistAddress, numTokens);
    console.log(typeof numTokens);
    console.log(orgAddress);
    const success = await this.props.drizzle.contracts.TokenMinter.methods
      .transfer(journalistAddress, numTokens)
      .send({ from: orgAddress });

    console.log(success, 'SUCCEED?');
  };

  approveTokenTransfer = async (journalistAddress, numTokens) => {
    const { orgAddress } = this.state;

    const success = await this.props.drizzle.contracts.TokenMinter.methods
      .approveTokenTransfer(journalistAddress, numTokens)
      .send({ from: orgAddress });

    console.log(success, 'SUCCEED?');
  };

  issueToken = adress => {
    let { tokens } = this.state;
    this.setState({ tokens: tokens - 1 });
  };

  render() {
    console.log(this.props, 'PROPS ORG  ');
    const { orgName, tokens } = this.state;
    return (
      <div>
        <h1>{orgName}</h1>
        <h2>{tokens}</h2>
        <TokenForm minter={this.transferTokens} formName={'transfer'} />
        <TokenForm minter={this.approveTokenTransfer} formName={'approve'} />

        <Issue issuer={this.issueToken} />
      </div>
    );
  }
}

export default Org;
