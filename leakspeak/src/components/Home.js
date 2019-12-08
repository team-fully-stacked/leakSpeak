import React from 'react';
import {
  Button,
  Icon,
  Image,
  Item,
  Label,
  Modal,
  Header,
  Divider,
  TextArea,
  Form,
  Input,
} from 'semantic-ui-react';

import contracts from '../contractData';

import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      filter: '',
      isSearch: true,
      selectedContract: {},
      contracts,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(contract) {
    contract.completed = true;
    this.setState({ isModal: false });
  }

  handleModal(contract) {
    this.setState({ selectedContract: contract });
    this.setState({ isModal: !this.state.isModal });
  }

  closeModal() {
    this.setState({ isModal: !this.state.isModal });
  }

  handleFilter(filter) {
    if (filter) {
      const newcontracts = this.state.contracts.filter(contract => {
        return contract.label.includes(filter) === true;
      });
      this.setState({ contracts: newcontracts });
      this.setState({ filter: '' });
    }
  }

  handleChange(evt) {
    this.setState({ filter: evt.target.value });
  }

  render() {
    const contracts = this.state.contracts.filter(contract => {
      return contract.completed === false;
    });

    const selectedContract = this.state.selectedContract;

    return (
      <div>
        <div className="search">
          <Input
            icon="newspaper"
            iconPosition="left"
            placeholder="Search tags..."
            onChange={this.handleChange}
            value={this.state.filter}
          />
          <Button
            onClick={() => {
              this.handleFilter(this.state.filter);
            }}
          >
            Filter
          </Button>
        </div>
        {!contracts.length ? (
          <div>
            <Header>No Open Contracts Please Try Again!</Header>
            <Button color="red"> Reload Page </Button>
          </div>
        ) : (
          <div className="home">
            <div className="all-contracts">
              <Item.Group divided>
                {contracts.map((contract, idx) => {
                  return (
                    <Item key ={idx}>
                      <Item.Image src={contract.imageUrl} />
                      <Item.Content>
                        <Item.Header>{contract.header} </Item.Header>
                        <Item.Meta>
                          {contract.company} - {contract.location} -{' '}
                          {contract.ammount}
                        </Item.Meta>
                        <Item.Description>
                          {contract.description}
                        </Item.Description>
                        <Item.Extra>
                          {contract.label.map((lab,idx) => {
                            return <Label key={idx} color="yellow">{lab}</Label>;
                          })}
                        </Item.Extra>
                        <Button
                          onClick={() => this.handleModal(contract)}
                          color="orange"
                          floated="right"
                        >
                          {' '}
                          Provide information .<Icon name="disk" />
                        </Button>
                        <Modal open={this.state.isModal}>
                          <Modal.Header>
                            {selectedContract.company} -{' '}
                            {selectedContract.location}
                          </Modal.Header>
                          <Modal.Content image>
                            <Image
                              wrapped
                              size="medium"
                              src={selectedContract.imageUrl}
                            />
                            <Modal.Description>
                              <Header as="h2">
                                <Icon name="bullhorn" />
                                {selectedContract.header}
                              </Header>
                              <Header as="h3">
                                Bounty: {selectedContract.ammount}
                              </Header>
                              <p>{selectedContract.description}</p>
                              <Divider />
                              <Header>Know Something?</Header>
                              <p>
                                Please Let us Know! Sumbit a response or upload
                                a file!
                              </p>
                              <Form>
                                <TextArea placeholder="Input your response..." />
                                <Button>
                                  {' '}
                                  <Icon name="camera" /> Upload Image/Video
                                </Button>
                                <Button>
                                  {' '}
                                  <Icon name="file audio" /> Upload Audio File
                                </Button>
                                <Button>
                                  <Icon name="folder open" /> Upload Document
                                </Button>
                              </Form>
                            </Modal.Description>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button
                              primary
                              onClick={() => {
                                this.handleSubmit(selectedContract);
                              }}
                            >
                              {' '}
                              Submit
                            </Button>
                            <Button secondary onClick={this.closeModal}>
                              {' '}
                              Cancel
                            </Button>
                          </Modal.Actions>
                        </Modal>
                      </Item.Content>
                    </Item>
                  );
                })}
              </Item.Group>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
