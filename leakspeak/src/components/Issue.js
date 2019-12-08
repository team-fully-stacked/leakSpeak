import React from 'react';
import { Button, Modal, Input } from 'semantic-ui-react';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      address: '',
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ address: value });
  };

  //Withdraw tokens from ownerAddress
  // transferFrom = async (ownerAddress, buyerAddress, numTokens) => {
  //   await this.props.drizzle.contracts.TokenMinter.methods
  //   .transferFrom(ownerAddress, buyerAddress, numTokens)
  //   .send({ from: userAddress });
  // }

  render() {
    const { issuer } = this.props;
    const { address } = this.state;
    return (
      <Modal
        trigger={
          <Button onClick={() => this.setState({ isOpen: true })}>
            Issue Tokens
          </Button>
        }
        open={this.state.isOpen}
      >
        <Modal.Header>Address To Issue</Modal.Header>
        <Modal.Content>
          <Input onChange={this.handleChange} />
          <Modal.Actions>
            <Button
              onClick={() => {
                issuer(address);
                this.setState({ isOpen: false });
              }}
            >
              Confirm
            </Button>
            <Button onClick={() => this.setState({ isOpen: false })}>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Issue;
