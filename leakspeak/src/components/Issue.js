import React from 'react';
import { Button, Modal, Input } from 'semantic-ui-react';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      ownerAddress: '',
      tokenQty: '',
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ address: value });
  };

  //Withdraw tokens from ownerAddress
  transferFrom = async (ownerAddress, userAddress, numTokens) => {
    await this.props.drizzle.contracts.TokenMinter.methods
      .transferFrom(ownerAddress, userAddress, numTokens)
      .send({ from: userAddress });
  };

  //Needs userAddress passed in as a prop
  render() {
    const { ownerAddress } = this.state;
    const { userAddress } = this.props;
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
            <Form
              onSubmit={() =>
                transferFrom(ownerAddress, userAddress, +tokenQty)
              }
            >
              <Form.Input
                required
                label={'Owner Address'}
                type="text"
                placeholder="Address"
                name="ownerAddress"
                value={ownerAddress}
                onChange={this.handleInputChange}
              />
              <Form.Input
                required
                label="Token Quantity"
                type="number"
                min="0"
                name="tokenQty"
                placeholder="0"
                value={tokenQty}
                onChange={this.handleInputChange}
              />
              <Button type="submit">Submit</Button>

              <Button onClick={() => this.setState({ isOpen: false })}>
                Cancel
              </Button>
            </Form>
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Issue;
