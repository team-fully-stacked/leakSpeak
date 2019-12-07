import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class Mint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenQty: 0
    };
  }

  render() {
    const {minter} = this.props
    const {tokenQty} = this.state
    return (
      <Modal trigger={<Button>Mint Tokens</Button>}>
        <Modal.Header>How Many Tokens?</Modal.Header>
        <Modal.Content>
          <input />
          <Button onClick={(tokenQty) => minter(tokenQty)}>Confirm</Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Mint;
