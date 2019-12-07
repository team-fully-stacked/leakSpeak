import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

import './Home.css';




class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contracts: [{
                header: 'Looking for infromation on car crash',
                company: 'BBC - New York, NY',
                imageUrl: '',
                description: 'Last night there was a suspicious car crash etc.. etc.. etc..',
                label:['Image', 'Car Cash', 'Local News'],

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
                        <Item.Header>{contract.header}</Item.Header>
                        <Item.Meta>{contract.company}</Item.Meta>
                        <Item.Description>{contract.description}</Item.Description>
                        <Item.Extra>
                            {contract.label.map(lab => {
                                return <Label>{lab}</Label>
                            })}
                            <Button basic color='green'> Approve </Button>
                            <Button basic color='red'>Decline</Button>
                        </Item.Extra>
                        <Button primary floated='right'> Add Information<Icon name='right chevron' /></Button>
                    </Item.Content>
                </Item>
            })}
        </Item.Group>
        </div>

        )
    }

}

export default Home;