import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  render() {
    const { issuer } = this.props;
    const {address} = this.state
    return (
      <Modal trigger={<Button>Issue Token</Button>}>
        <Modal.Header>Address To Issue</Modal.Header>
        <Modal.Content>
          <input />
          <Button onClick = {(address) => issuer(address)}>Confirm</Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Issue;
