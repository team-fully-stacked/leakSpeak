import ipfsClient from 'ipfs-http-client';
import React from 'react';
// import web3 from './web3';

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

class IPFS extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // currentAccount: '',
            // currentBalance: '',
            // currentBlock: '',
            currentFileIPFSHash: '',
            ipfsHashArray: '',
            message: '',
        };
    };

    // async componentDidMount() {
    // get version
    // console.log('Current web3 version: ', web3.version);

    // get all metamask info
    // await this.getCurrentAccountBalAndBlockNum()

    // get all IPFS hashes
    // await this.getIPFSHashes();

    // update the state
    // this.setState({
    //     message: `Current web3 version: ${web3.version}`
    // });
    // };

    // getCurrentAccountBalAndBlockNum = async () => {
    //     // get the accounts and log them
    //     const accountsArray = await web3.eth.getAccounts();
    //     // get the account address since it is the first element
    //     const currentAccount = accountsArray[0];
    //     // get the current balance
    //     const currentBalance = await web3.eth.getBalance(currentAccount);
    //     // get current block number
    //     const currentBlock = await web3.eth.getBlockNumber();

    //     this.setState({
    //         currentAccount,
    //         currentBalance: currentBalance.toString(),
    //         currentBlock,
    //     });
    //     return { currentAccount, currentBalance, currentBlock };
    // }

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
            console.log('Current File IPFS Hash>>>>>', currentFileIPFSHash)

            this.setState({
                currentFileIPFSHash,
                message: `Current File IPFS Hash: ${currentFileIPFSHash}`
            })
            // const currentMultihash = getBytes32FromMultihash(results[0].hash)
            // console.log('Multihash Encoding For Eth>>>>>', currentMultihash.digest)
            // this.setState({
            //     message: `Multihash Encoding For Eth: ${currentMultihash.digest}`
            // })

            // got the hash, now to plug it into the blockchain
            // const ethResults = await ipfsContract.methods.setEntry(currentMultihash.digest).send({ from: this.state.currentAccount });
            // console.log('Uploaded to Ethereum blockchain>>>>>', ethResults)
            this.setState({
                message: `Uploaded to Ethereum blockchain.`
            })

            // this.getIPFSHashes();
        };
    };

    getIPFSHash = async () => {

    }

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
        console.log('fuk!!')
        let hashResult;
        if (this.state.currentFileIPFSHash) hashResult = <a href={`https://ipfs.infura.io/ipfs/${this.state.currentFileIPFSHash}`}>{`https://ipfs.infura.io/ipfs/${this.state.currentFileIPFSHash}`}</a>
        return (
            <div>
                <input type="file" onChange={(event) => this.onChange(event.target.files[0])} />
                <p>{this.state.message}</p>
                {hashResult}
                {/* <a>{this.state.ipfsHashArray}</a> */}
            </div >
        )
    }

}


export default IPFS;