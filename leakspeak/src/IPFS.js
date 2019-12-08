import ipfsClient from 'ipfs-http-client';
import React from 'react';
// import web3 from './web3';

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

class IPFS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAccount: '',
            currentFileIPFSHash: '',
            ipfsHashArray: '',
            message: 'no msg yet',
        };
    };

    componentDidMount = async () => {
        const currentAccount = (await this.props.drizzle.web3.eth.getAccounts())[0];

        this.setState({ currentAccount });
    };



    onChange = (file) => {
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
        return (
            <div>
                <input type="file" onChange={(event) => this.onChange(event.target.files[0])} />
                <p>{this.state.message}</p>
                {hashResult}
            </div >
        )
    }

}


export default IPFS;