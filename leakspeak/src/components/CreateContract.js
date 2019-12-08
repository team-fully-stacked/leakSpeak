import React from "react";
import { Modal, Icon, Button, Image, Header, TextArea, Form, Divider, Input, Label} from "semantic-ui-react";

class CreateContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      quorum: '',
      open: false,
      description: '',
      amount: 0.00,
      location: '',
    };

 
  }

  open = () => this.setState({open: true})

  close = () => this.setState({ open: false })

  submit = () => {
    console.log(this.state)
    this.setState({description: '', open: false, amount: 0, location: '', question: '', quorum: 0})

  }

  render() {

    return (
        <Modal 
          open={this.state.open} 
          trigger={<Button color = 'orange'> <Icon name = 'add'/>Create Contract</Button>} 
          onOpen={this.open}
          onClose={this.close}>
            <Modal.Header>Create a Contract</Modal.Header>
            <Modal.Content image scrolling>
              <Image size='medium' src='data:image/png;base64,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'
 wrapped />
              <Modal.Description>
              <Divider horizontal>
                  <Header as='h4'>
                  <Icon name='bullhorn' />
                  Description
                  </Header>
              </Divider>
             
          <Form>
            <Input fluid placeholder= 'Question...' value={this.state.question} onChange={(evt) => {this.setState({question: evt.target.value})}}/>
          <TextArea placeholder='Tell us more' value={this.state.description} onChange={(evt) => {this.setState({description: evt.target.value})}}/>
          </Form>
          {' '}
          <Input labelPosition='right' type='text' placeholder='Bounty Amount'>
          <Label basic>$</Label>
          <input value={this.state.amount} onChange={(evt) => {this.setState({amount: evt.target.value})}}/>
          <Label>.00</Label>          
        </Input>
        <Input placeholder='Location...' value={this.state.location} onChange={(evt) => {this.setState({location: evt.target.value})}}/>
        <Input placeholder='Quorum...' value={this.state.quorum} onChange={(evt) => {this.setState({quorum: evt.target.value})}}/>

        </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
        <Button secondary onClick={this.close}>
         Cancel
        </Button>
        <Button primary onClick={this.submit}>
         Submit
        </Button>
    </Modal.Actions>
        </Modal>
    )
  }
}

export default CreateContract;
