import ipfsClient from 'ipfs-http-client';
import React from 'react';
import {
  TextArea,
  Form,
  Item,
  Modal,
  Button,
  Icon,
  Label,
  Grid,
  Image,
  Divider,
  Header,
  Input,
} from 'semantic-ui-react';

const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: '5001',
  protocol: 'https',
});

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAccount: '',
      currentFileIPFSHash: 'waiting...',
      ipfsHashArray: '',
      message: 'Nothing Uploaded...',
      addVoterAddress: '',
      isAlive: false,
      currentApprovals: 0,
    };
  }

  componentDidMount = async () => {
    const currentAccount = (await this.props.drizzle.web3.eth.getAccounts())[0];

    this.setState({ currentAccount });
  };

  fileInputRef = React.createRef();

  onUpload = file => {
    this.setState({
      message: 'Reading file...',
    });
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = async () => {
      // loadend can fire on failure, onload only fires on success
      const fileArrayBuffer = fileReader.result;
      const fileBuffer = await Buffer.from(fileArrayBuffer);
      const results = await ipfs.add(fileBuffer);
      const currentFileIPFSHash = results[0].hash;
      console.log(
        '>>>>>: IPFS -> fileReader.onload -> currentFileIPFSHash',
        currentFileIPFSHash,
        typeof currentFileIPFSHash
      );

      this.setState({
        currentFileIPFSHash,
        message: `Current File IPFS Hash: ${currentFileIPFSHash}`,
      });

      const success = await this.props.drizzle.contracts.ContractCreator.methods
        .submitInfo(currentFileIPFSHash)
        .send({ from: this.state.currentAccount });

      if (success) {
        console.log(
          await this.props.drizzle.contracts.ContractCreator.methods
            .responseInfo()
            .call()
        );
        this.setState({
          message: `Uploaded to Ethereum blockchain.`,
        });
      } else {
        this.setState({
          message: 'failed to upload!',
        });
      }
    };
  };

  addVoter = async () => {
    const success = await this.props.drizzle.contracts.ContractCreator.methods
      .addVoter(this.state.addVoterAddress)
      .send({ from: this.state.currentAccount });
    const votersLength = await this.props.drizzle.contracts.ContractCreator.methods
      .votersLength()
      .call();
    console.log('>>>>>: IPFS -> addVoter -> votersLength', votersLength);
  };

  goLive = async () => {
    const success = await this.props.drizzle.contracts.ContractCreator.methods
      .goLive()
      .send({ from: this.state.currentAccount });
    this.setState({ isAlive: true });
  };

  addApprovall = async () => {
    const success = await this.props.drizzle.contracts.ContractCreator.methods
      .vote()
      .send({ from: this.state.currentAccount });
    const currentApprovals = await this.props.drizzle.contracts.ContractCreator.methods
      .approvals()
      .call();
    this.setState({ currentApprovals });
  };

  onChange = async e => {
    e.preventDefault();
    this.setState({ addVoterAddress: e.target.value });
  };

  render() {
    console.log('>>>>>>', this.props);
    let hashResult;
    if (this.state.currentFileIPFSHash)
      hashResult = (
        <a
          href={`https://ipfs.infura.io/ipfs/${this.state.currentFileIPFSHash}`}
        >{`https://ipfs.infura.io/ipfs/${this.state.currentFileIPFSHash}`}</a>
      );

    return (
      <div>
        <Button
          content="Choose File"
          labelPosition="left"
          icon="file"
          onClick={() => this.fileInputRef.current.click()}
        />
        <input
          ref={this.fileInputRef}
          type="file"
          hidden
          onChange={event => this.onUpload(event.target.files[0])}
        />
        <Header as="h5">{this.state.message}</Header>
        <Header as="h5">{hashResult}</Header>
      </div>
    );
  }
}

export default UploadImage;
