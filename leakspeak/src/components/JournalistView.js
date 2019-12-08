import React from 'react';
import { Button, Card, Form, Icon } from 'semantic-ui-react';
import TokenForm from './TokenForm';
import { toast, Flip } from 'react-toastify';

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
    await this.props.drizzle.contracts.ContractCreator.methods.quorum().call();

    return {
      userAddress,
      tokenBalance,
      tokenSymbol,
    };
  };

  //0x8d165F7bDB9AaFD6Fd6DD2Aa6D7E2a9b390fC1B4

  componentDidMount = async () => {
    const data = await this.getData()
    this.setState(data);
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

    //0x07c17b82318E6D072Bdfcc42dd83c9B9614894E3
  };

  approveTokenTransfer = async (sourceAddress, numTokens) => {
    const { userAddress } = this.state;

    this.setState({ loading: true });
    toast.info('Processing change...', {
      position: 'top-right',
      autoClose: 10000,
      transition: Flip,
    });
    try {
      await this.props.drizzle.contracts.TokenMinter.methods
        .approve(sourceAddress, numTokens)
        .send({ from: userAddress });
    } catch (error) {
      this.setState({ errorMessage: error.message });
      toast.dismiss();
    }
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
      <div className="journalist-view">
        <Card centered={true}>
          <Card.Content textAlign="center">
            <h2>Address</h2>
            <textarea
              ref={textarea => (this.textArea = textarea)}
              id="jAddr"
              value={userAddress}
              readOnly={true}
              rows="1"
            />
            ,
            <p>
              Copy Address to Clipboard:
              <Button
                onClick={() => {
                  this.textArea.select();
                  console.log(this.textArea);
                  document.execCommand('copy');
                }}
              >
                <Icon name="clipboard" />
              </Button>
            </p>
            <h2>
              Tokens: {tokenBalance}
              {tokenSymbol}
            </h2>
            <TokenForm
              minter={this.approveTokenTransfer}
              formName={'approve'}
            />
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
      </div>
    );
  }
}

export default JournalistView;
