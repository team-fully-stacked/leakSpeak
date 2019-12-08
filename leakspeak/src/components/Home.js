import React from 'react'
import { Button, Icon, Image, Item, Label, Modal, Header, Divider, TextArea, Form} from 'semantic-ui-react'

import './Home.css';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
      }



    render() {
        const contracts = this.state.contracts
        return (
            <div className = 'home'>
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
                                return <Label>{lab}</Label>
                            })}
                            <Button basic color='green'> Approve </Button>
                            <Button basic color='red'>Decline</Button>
                        </Item.Extra>
                        <Modal closeIcon trigger={<Button primary floated='right'> Provide Infromation  .<Icon name='edit'/></Button>} >
                            <Modal.Header>{contract.company} - {contract.location}</Modal.Header>
                            <Modal.Content image>
                            <Image wrapped size='medium' src='no-image-icon-15.png' />
                            <Modal.Description>
                                <Header as='h2'>
                                <Icon name='bullhorn' />
                                {contract.header}
                                </Header>
                                <Header as='h3'>Bounty:{contract.ammount}</Header>
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
                                <Button primary> Submit</Button>
                                <Button primary> Cancel</Button>
                            </Modal.Actions>
                        </Modal>
                    </Item.Content>
                </Item>
            })}
        </Item.Group>
        </div>

        )
    }

}


export default Home;