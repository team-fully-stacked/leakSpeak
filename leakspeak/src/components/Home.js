import React from 'react'
import { Button, Icon, Image, Item, Label, Modal, Header, Divider, TextArea, Form, Input} from 'semantic-ui-react'

import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModal: false,
            contracts: [{
                header: 'Looking for infromation on car crash',
                company: 'BBC',
                ammount: '$200',
                location: ' New York, NY',
                imageUrl: '',
                description: 'Last night there was a suspicious car crash etc.. etc.. etc..',
                label:['Image', 'Car Cash', 'Local News'],
                completed: false

            },{
                header: 'Looking for infromation on car crash',
                company: 'BBC - New York, NY',
                imageUrl: '',
                description: 'Last night there was a suspicious car crash etc.. etc.. etc..',
                label:['Image', 'Car Cash', 'Local News'],
                completed: false


            },{
                header: 'Looking for infromation on car crash',
                company: 'BBC - New York, NY',
                imageUrl: '',
                description: 'Last night there was a suspicious car crash etc.. etc.. etc..',
                label:['Image', 'Car Cash', 'Local News'],
                completed: false


            },{
                header: 'Looking for infromation on car crash',
                company: 'BBC - New York, NY',
                imageUrl: '',
                description: 'Last night there was a suspicious car crash etc.. etc.. etc..',
                label:['Image', 'Car Cash', 'Local News'],
                completed: false

            }]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
      }

      handleSubmit(contract) {
          contract.completed = true;
          this.setState({isModal: false})
          }

          handleModal() {
              this.setState({isModal: !this.state.isModal})
          }

    render() {
        const contracts = this.state.contracts.filter(contract => {
            return contract.completed === false
        })

       
        return (
            <div>
            <div className = 'search'>
                <Input icon='newspaper' iconPosition='left' placeholder='Search tags...' /><Button>Filter</Button>
            </div>
            <div className = 'home'>
                <div className = 'all-contracts'>
        <Item.Group divided>
            {contracts.map(contract => {
               return <Item>
                    <Item.Image src='no-image-icon-15.png' />
                    <Item.Content>
                        <Item.Header>{contract.header} </Item.Header>
                        <Item.Meta>{contract.company} - {contract.location} - {contract.ammount}</Item.Meta>
                        <Item.Description>{contract.description}</Item.Description>
                        <Item.Extra>
                            {contract.label.map(lab => {
                                return <Label color='yellow'>{lab}</Label>
                            })}
                        </Item.Extra>
                        <Button onClick={this.handleModal} color='orange' floated='right'> Provide Infromation  .<Icon name='edit'/></Button>
                        <Modal open={this.state.isModal} >
                            <Modal.Header>{contract.company} - {contract.location}</Modal.Header>
                            <Modal.Content image>
                            <Image wrapped size='medium' src='no-image-icon-15.png' />
                            <Modal.Description>
                                <Header as='h2'>
                                <Icon name='bullhorn' />
                                {contract.header}
                                </Header>
                                <Header as='h3'>Bounty: {contract.ammount}</Header>
                                <p>{contract.description}</p>
                                <Divider />
                                <Header>Know Something?</Header>
                                <p>Please Let us Know! Sumbit a response or upload a file!</p>
                                <Form>
                                    <TextArea placeholder="Input your response..."/>
                                    <Button> <Icon name="camera" /> Upload Image/Video</Button>
                                    <Button> <Icon name='file audio' /> Upload Audio File</Button>
                                    <Button><Icon name='folder open' /> Upload Document</Button>
                                </Form>
                            </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary onClick={() => {this.handleSubmit(contract)}}> Submit</Button>
                                <Button secondary onClick={this.handleModal}> Cancel</Button>
                            </Modal.Actions>
                        </Modal>
                    </Item.Content>
                </Item>
            })}
        </Item.Group>
        </div>
        </div>
        </div>

        )
    }

}


export default Home;