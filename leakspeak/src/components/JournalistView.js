import React from 'react';
import { Button, Card, Form } from 'semantic-ui-react';
import TokenForm from './TokenForm';

class JournalistView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: '',
      delegateAddress: '',
      tokenBalance: 0,
      allowance: 0,
      tokenSymbol: '',
    };
  }

  getData = async () => {
    const userAddress = (await this.props.drizzle.web3.eth.getAccounts())[0];
    const tokenBalance = await this.props.drizzle.contracts.TokenMinter.methods
      .balanceOf(userAddress)
      .call();
    const tokenSymbol = await this.props.drizzle.contracts.TokenMinter.methods
      .symbol()
      .call();
    const quorum = await this.props.drizzle.contracts.ContractCreator.methods.quorum().call()
    console.log(">>>>>: JournalistView -> getData -> quorum", quorum)

    return {
      userAddress,
      tokenBalance,
      tokenSymbol,
    };
  };

  //0x8d165F7bDB9AaFD6Fd6DD2Aa6D7E2a9b390fC1B4

  componentDidMount = async () => {
    this.setState(await this.getData());
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //Check maximum allowed tokens to transfer
  allowance = async delegateAddress => {
    const allowance = await this.props.drizzle.contracts.TokenMinter.methods
      .allowance(this.state.userAddress, delegateAddress)
      .call();
    this.setState({ allowance });
  };

  approveTokenTransfer = async (sourceAddress, numTokens) => {
    const { userAddress } = this.state;

    await this.props.drizzle.contracts.TokenMinter.methods
      .approve(sourceAddress, numTokens)
      .send({ from: userAddress });
  };

  render() {
    const {
      allowance,
      delegateAddress,
      userAddress,
      tokenBalance,
      tokenSymbol,
    } = this.state;
    return (
      <Card centered={true}>
        <Card.Content textAlign="center">
          <h2>Address: {userAddress}</h2>
          <h2>
            Tokens: {tokenBalance}
            {tokenSymbol}
          </h2>
          <TokenForm minter={this.approveTokenTransfer} formName={'approve'} />

          <Form onSubmit={() => this.allowance(delegateAddress)}>
            <Form.Input
              required
              label="Delegate Address"
              type="text"
              placeholder="Address"
              name="delegateAddress"
              value={delegateAddress}
              onChange={this.handleInputChange}
            />
            <Button type="submit">Submit</Button>
          </Form>

          <h2>
            Allowance: {allowance} {tokenSymbol}
          </h2>
        </Card.Content>
      </Card>
    );
  }
}

export default JournalistView;
