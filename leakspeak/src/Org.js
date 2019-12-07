import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class Org extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: "",
      tokens: 0,
      mint: false,
      issue: false
    };
  }

  getData = () => {
    return {
      orgName: "BBC",
      tokens: 100
    };
  };

  componentDidMount = () => {
    const { orgName, tokens } = this.getName();
    this.setState({ orgName, tokens });
  };

  handleClose = () => {
    this.setState({ mint: false, issue: false });
  };

  mintToken = () => {
    this.setState({ mint: true });
  };

  isssueToken = () => {
    this.setState({ issue: true });
  };

  render() {
    const { orgName, tokens, mint, issue } = this.state;
    const { handleClose, mintToken, isssueToken } = this;
    return (
      <div>
        <h1>{orgName}</h1>
        <h2>{tokens}</h2>
        <Modal trigger={<Button>Mint Tokens</Button>}>
          <Modal.Header>How Many Tokens?</Modal.Header>
          <Modal.Content>
                <input />
                <Button>Confirm</Button>
          </Modal.Content>
        </Modal>
        <Modal trigger={<Button>Issue Token</Button>}>
          <Modal.Header>Address To Issue</Modal.Header>
          <Modal.Content>
            <input />
            <Button>Confirm</Button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
