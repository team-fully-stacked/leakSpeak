import React from "react";
import { Button, Modal, Input } from "semantic-ui-react";

class Mint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tokenQty: 0
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ tokenQty: value });
  };

  render() {
    const { minter } = this.props;
    const { tokenQty } = this.state;
    return (
      <Modal
        trigger={
          <Button onClick={() => this.setState({ isOpen: true })}>
            Mint Tokens
          </Button>
        }
        open={this.state.isOpen}
      >
        <Modal.Header>How Many Tokens?</Modal.Header>
        <Modal.Content>
          <Input onChange={this.handleChange} />
          <Modal.Actions>
            <Button
              onClick={() => {
                minter(tokenQty);
                this.setState({ isOpen: false });
              }}
            >
              Confirm
            </Button>
            <Button onClick={() => this.setState({ isOpen: false })}>Cancel</Button>
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Mint;
