import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

import './Home.css';




class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contracts: []
        }
      }

    render() {
        return (
            <div className = 'home'>
        <Item.Group divided>
            <Item>
            <Item.Image src='no-image-icon-15.png' />
            <Item.Content>
                <Item.Header as='a'>Hello world</Item.Header>
                <Item.Meta>
                <span className='cinema'>Earth</span>
                </Item.Meta>
                <Item.Description>{'TESTSTETETETETTETSTTETTETETETSTTET'}</Item.Description>
                <Item.Extra>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                <Label>Ploitics</Label>
                <Label icon='person' content='Information' />
                </Item.Extra>
            </Item.Content>
            </Item>

            <Item>
            <Item.Image src='no-image-icon-15.png' />

            <Item.Content>
                <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                <Item.Meta>
                <span className='cinema'>IFC Cinema</span>
                </Item.Meta>
                <Item.Description>{}</Item.Description>
                <Item.Extra>
                <Button primary floated='right'>
                    Add Information
                    <Icon name='right chevron' />
                </Button>
                <Label>Limited</Label>
                </Item.Extra>
            </Item.Content>
            </Item>

            <Item>
            <Item.Image src='no-image-icon-15.png' />

            <Item.Content>
                <Item.Header as='a'>Watchmen</Item.Header>
                <Item.Meta>
                <span className='cinema'>IFC</span>
                </Item.Meta>
                <Item.Description>{}</Item.Description>
                <Item.Extra>
                <Button primary floated='right'>
                    Buy tickets
                    <Icon name='right chevron' />
                </Button>
                </Item.Extra>
            </Item.Content>
            </Item>
        </Item.Group>
        </div>

        )
    }

}


export default Home;