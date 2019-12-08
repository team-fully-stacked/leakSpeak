import React from "react";
import {
  Input,
  Item,
  Modal,
  Button,
  Label,
  Icon,
  Header,
  Image,
  Form,
  Divider,
  TextArea
} from "semantic-ui-react";
import CreateContract from "./CreateContract"

class ManageContracts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        contracts: [{
            header: 'Looking for infromation on car crash',
            company: 'BBC',
            ammount: '$200',
            location: ' New York, NY',
            imageUrl: '',
            description: 'Last night there was a suspicious car crash etc.. etc.. etc..',
            label:['Image', 'Car Cash', 'Local News'],
            live: false,
            completed: false
        }]
    };
  }

  render() {
    const contracts = this.state.contracts.filter(contract => {
      return contract.completed === false;
    });

    return (
      <div>
        <div className="search">
          <CreateContract />
        </div>
        <div className="home">
          <div className="all-contracts">
            <Item.Group divided>
              {contracts.map(contract => {
                return (
                  <Item>
                    <Item.Image src="no-image-icon-15.png" />
                    <Item.Content>
                      <Item.Header>{contract.header} </Item.Header>
                      <Item.Meta>
                        {contract.company} - {contract.location} -{" "}
                        {contract.ammount}
                      </Item.Meta>
                      <Item.Description>
                        {contract.description}
                      </Item.Description>
                      <Item.Extra>
                        {contract.label.map(lab => {
                          return <Label color="yellow">{lab}</Label>;
                        })} <Icon></Icon>
                      </Item.Extra>
                      <Button
                        color="orange"
                        floated="right"
                      >
                        {" "}
                       Go Live <Icon name="edit" />
                      </Button>
                      <Button
                        color="orange"
                        floated="right"
                      >
                        {" "}
                       Add Voter <Icon name="edit" />
                      </Button>
                    </Item.Content>
                  </Item>
                );
              })}
            </Item.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageContracts;
