import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

class Mint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: props.formName,
      isOpen: false,
      recipientAddress: '',
      tokenQty: '',
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { minter } = this.props;
    const { isOpen, formName, recipientAddress, tokenQty } = this.state;
    const transfer = formName === 'transfer';
    return (
      <Modal
        trigger={
          <Button onClick={() => this.setState({ isOpen: true })}>
            {transfer ? 'Transfer Tokens' : 'Approve Transfer'}
          </Button>
        }
        open={isOpen}
      >
        <Modal.Header>
          {transfer
            ? 'Transfer How Many Tokens?'
            : 'Approve Transfer of How Many Tokens?'}
        </Modal.Header>
        <Modal.Content>
          <Form
            onSubmit={() => {
              minter(recipientAddress, +tokenQty);
              this.setState({ isOpen: false });
            }}
          >
            <Form.Input
              required
              label={transfer ? 'Recipient Address' : 'Delegate Address'}
              type="text"
              placeholder="Address"
              name="recipientAddress"
              value={recipientAddress}
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
        </Modal.Content>
      </Modal>
    );
  }
}

export default Mint;
