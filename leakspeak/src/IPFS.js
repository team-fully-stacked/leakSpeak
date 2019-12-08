import ipfsClient from 'ipfs-http-client';
import React from 'react';
import { TextArea, Form, Item, Modal, Button, Icon, Label, Grid, Image, Divider, Header, Input, Card, Message} from "semantic-ui-react";

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

class IPFS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAccount: '',
            currentFileIPFSHash: 'waiting...',
            ipfsHashArray: '',
            message: 'no msg yet',
            addVoterAddress: '',
            isAlive: false,
            currentApprovals: 0,
        };
    };

    componentDidMount = async () => {
        const currentAccount = (await this.props.drizzle.web3.eth.getAccounts())[0];

        this.setState({ currentAccount });
    };



    onUpload = (file) => {
        this.setState({
            message: 'Reading file...'
        })
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file)

        fileReader.onload = async () => { // loadend can fire on failure, onload only fires on success
            const fileArrayBuffer = fileReader.result
            const fileBuffer = await Buffer.from(fileArrayBuffer)
            const results = await ipfs.add(fileBuffer)
            const currentFileIPFSHash = results[0].hash
            console.log(">>>>>: IPFS -> fileReader.onload -> currentFileIPFSHash", currentFileIPFSHash, typeof currentFileIPFSHash)

            this.setState({
                currentFileIPFSHash,
                message: `Current File IPFS Hash: ${currentFileIPFSHash}`
            })

            const success = await this.props.drizzle.contracts.ContractCreator.methods.submitInfo(currentFileIPFSHash).send({ from: this.state.currentAccount })

            if (success) {
                console.log(await this.props.drizzle.contracts.ContractCreator.methods.responseInfo().call())
                this.setState({
                    message: `Uploaded to Ethereum blockchain.`
                })
            } else {
                this.setState({
                    message: 'failed to upload!'
                })
            }
        };
    };

    addVoter = async () => {
        const success = await this.props.drizzle.contracts.ContractCreator.methods.addVoter(this.state.addVoterAddress).send({ from: this.state.currentAccount })
        const votersLength = await this.props.drizzle.contracts.ContractCreator.methods.votersLength().call();
        console.log(">>>>>: IPFS -> addVoter -> votersLength", votersLength)
    }

    goLive = async () => {
        const success = await this.props.drizzle.contracts.ContractCreator.methods.goLive().send({ from: this.state.currentAccount })
        this.setState({ isAlive: true }); // top kek, no time :\
    }

    addApprovall = async () => {
        const success = await this.props.drizzle.contracts.ContractCreator.methods.vote().send({ from: this.state.currentAccount })
        const currentApprovals = await this.props.drizzle.contracts.ContractCreator.methods.approvals().call()
        this.setState({ currentApprovals })
    }

    onChange = async (e) => {
        e.preventDefault();
        this.setState({ addVoterAddress: e.target.value })
        // console.log(">>>>>: IPFS -> onChange -> addVoterAddress", this.state.addVoterAddress)
    }

    // getIPFSHash = async () => {
    //     const ipfsHash = await this.props.drizzleState.
    // }

    // getIPFSHashes = async () => {
    //     // get all hashes for current address from blockchain
    //     this.setState({
    //         message: 'Getting IPFS hashes...'
    //     })
    //     const { currentAccount } = await this.getCurrentAccountBalAndBlockNum();
    //     const rawipfsHashArray = await ipfsContract.methods.getEntry(currentAccount).call(); // no from property bc using metamask

    //     const ipfsHashArray = rawipfsHashArray.map(hash => getMultihashFromContractResponse(hash))
    //     console.log('get ipfsHashArray>>>>>', ipfsHashArray)
    //     this.setState({
    //         ipfsHashArray,
    //         message: 'IPFS Hashes Retrieved.'
    //     });
    // }

    render() {
        console.log('>>>>>>', this.props)
        let hashResult;
        if (this.state.currentFileIPFSHash) hashResult = <a href={`https://ipfs.infura.io/ipfs/${this.state.currentFileIPFSHash}`}>{`https://ipfs.infura.io/ipfs/${this.state.currentFileIPFSHash}`}</a>
        let color = 'red'
        let message = 'Not Live'
        if(this.state.isAlive) {
            color ='green'
            message='Live'
        } else {
            color = 'red'
            message = 'Not Live'
        }
        
        return (
            <div style={{
                marginTop: "30px"
            }}>
                <div style={{
                    marginBottom: "30px"
                }}>
                <Divider >
                    <Header as='h3'>
                    Basic Information 
                    </Header>
                </Divider>
                </div>
                <div>
                {(!this.state.isAlive) ?
                <div>
                <Button basic color={color} horizontal size={'large'}>
                    {message}
                </Button> 
                <div style={{
                    margin: '10px'
                }}>
                    <Input onChange={(e) => this.onChange(e)}></Input>
                    <Button color={'orange'} onClick={() => this.addVoter()}> <Icon name="add" />Add Voter</Button>
                    <Button color={'green'} onClick={() => this.goLive()}><Icon name="rocket" /> Go Live</Button>
                </div>
                </div> : <div>
                
                <Card>
                        <Card.Header>
                          <Message
                            success={this.state.isAlive}
                            warning={this.state.isAlive && !this.state.currentApprovals}
                            negative={!this.state.isAlive}
                            header={`Status:
                              ${
                                this.state.isAlive
                                  ? this.state.currentApprovals
                                    ? this.state.currentApprovals
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
                           
                            
                            {(!this.state.currentApprovals) ? <div>
                                <Button onClick={() => this.addApprovall()}>Add Approval</Button>
                            </div> : 
                            <Label>
                            <Icon link name="thumbs up" color="black" />
                            Verified
                          </Label>
                        }
                            {this.state.currentApprovals} / {1}
                          </div>
                        </Card.Content>
                      </Card> 
                      </div>
                    }
                <div style={{
                    margin: '10px'
                }}>
                    
                </div>
                </div>
            </div >
        )
    }

}


export default IPFS;