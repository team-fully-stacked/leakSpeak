import React from 'react';
import { Card } from 'semantic-ui-react';
import TokenForm from './TokenForm';
import { toast, Flip } from 'react-toastify';

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

    this.setState({ loading: true });
    toast.info('Processing change...', {
      position: 'top-right',
      autoClose: 10000,
      transition: Flip,
    });
    try {
      await this.props.drizzle.contracts.TokenMinter.methods
        .transfer(journalistAddress, numTokens)
        .send({ from: orgAddress });
    } catch (error) {
      this.setState({ errorMessage: error.message });
      toast.dismiss();
    }
  };

  approveTokenTransfer = async (journalistAddress, numTokens) => {
    const { orgAddress } = this.state;

    this.setState({ loading: true });
    toast.info('Processing change...', {
      position: 'top-right',
      autoClose: 10000,
      transition: Flip,
    });
    try {
      await this.props.drizzle.contracts.TokenMinter.methods
        .approveTokenTransfer(journalistAddress, numTokens)
        .send({ from: orgAddress });
    } catch (error) {
      this.setState({ errorMessage: error.message });
      toast.dismiss();
    }
  };

  render() {
    const { orgName, tokens } = this.state;
    return (
      <Card centered={true}>
        <Card.Content textAlign="center">
          <h1>{orgName}</h1>
          <h2>{tokens}</h2>
          <TokenForm minter={this.transferTokens} formName={'transfer'} />
        </Card.Content>
      </Card>
    );
  }
}

export default Org;
