import React from "react";
import { Modal, Icon } from "semantic-ui-react";

class CreateContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      quorum: 0
    };
  }

  render() {

    return (
        <Modal trigger={<Icon></Icon>} >
            
        </Modal>
    )
  }
}

export default CreateContract;
