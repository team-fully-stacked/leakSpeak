import React from 'react';
import {
  TextArea,
  Form,
  Item,
  Modal,
  Button,
  Icon,
  Label,
  Card,
  Message,
} from 'semantic-ui-react';
import CreateContract from './CreateContract';

const statusHash = {
  'Not Live': 'negative',
  'Awaiting Votes': 'warning',
  'Quorum Met': 'success',
};

class ManageContracts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagEdit: false,
      tagString: '',
      targetTags: 0,
      contracts: [
        {
          header: 'Looking for infromation on car crash',
          company: 'BBC',
          ammount: '$200',
          location: ' New York, NY',
          imageUrl:
            'data:image/png;base64,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',

          description:
            'Last night there was a suspicious car crash etc.. etc.. etc..',
          label: ['Image', 'Car Cash', 'Local News'],
          live: false,
          completed: false,
          voted: false,
          voters: [
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
          ],
          Approvals: 1,
          quorum: '2/3',
        },
        {
          header: 'Looking for information regarding potential Oil Spill',
          company: 'BBC',
          ammount: '$200',
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          label: ['Image', 'Oil Spill', 'Global News', 'BBC'],
          completed: false,
          live: true,
          voted: true,
          voters: [
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
            0x1eb6139785f46de6fa1334ef724e2c1cd42f8495,
          ],
          Approvals: 1,
          votes: 2,
          total: 3,
        },
      ],
      votes: 3,
    };
  }

  modifyTags = (tagString, idx) => {
    const newTags = tagString.split(',');
    const { contracts } = this.state;
    contracts[idx].label = newTags;
    this.setState({ contracts });
  };

  render() {
    const { contracts, votes } = this.state;
    return (
      <div>
        <div className="search">
          <CreateContract />
        </div>
        <div className="home">
          <div className="all-contracts">
            <Item.Group divided>
              {contracts.map((contract, idx) => {
                return (
                  <Item>
                    <Item.Image src="no-image-icon-15.png" />
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
                        {contract.label.map(lab => {
                          return <Label color="yellow">{lab}</Label>;
                        })}
                        <Icon
                          name="edit"
                          onClick={() => {
                            let tagString = contract.label.join(',');

                            this.setState({
                              tagEdit: true,
                              targetTags: idx,
                              tagString,
                            });
                          }}
                        />
                      </Item.Extra>
                      {contract.live ? (
                        <></>
                      ) : (
                        <div>
                          <Button
                            color="orange"
                            floated="right"
                            onClick={this.goLive}
                          >
                            Go Live
                          </Button>
                          <Button color="orange" floated="right">
                            Add Voter
                          </Button>
                        </div>
                      )}

                      <Card>
                        <Card.Header>
                          <Message
                            success={contract.completed}
                            warning={contract.live && !contract.completed}
                            negative={!contract.live}
                            header={`Status:
                              ${
                                contract.live
                                  ? contract.voted
                                    ? contract.completed
                                      ? 'Quorum Met'
                                      : 'Awaiting Votes'
                                    : 'Awaiting Votes'
                                  : 'Not Live'
                              }`}
                          ></Message>
                        </Card.Header>
                        <Card.Content>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Label
                              as="a"
                              color="green"
                              onClick={() => {
                                const updatedContract = [...contracts];
                                updatedContract[idx].completed = true;

                                this.setState({
                                  votes: votes + 1,
                                  contracts: updatedContract,
                                });
                              }}
                            >
                              <Icon link name="thumbs up" color="black" />
                              Verified
                            </Label>
                            {votes} / {4}
                          </div>
                        </Card.Content>
                      </Card>
                    </Item.Content>
                  </Item>
                );
              })}
            </Item.Group>
            <Modal open={this.state.tagEdit}>
              <Modal.Header>Add tags sperated by a comma (,)</Modal.Header>
              <Modal.Content>
                <Form>
                  <TextArea
                    value={this.state.tagString}
                    onChange={e => {
                      this.setState({ tagString: e.target.value });
                    }}
                  />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  onClick={() => {
                    this.modifyTags(
                      this.state.tagString,
                      this.state.targetTags
                    );
                    this.setState({
                      targetTags: 0,
                      tagString: '',
                      tagEdit: false,
                    });
                  }}
                >
                  {' '}
                  Done
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageContracts;
