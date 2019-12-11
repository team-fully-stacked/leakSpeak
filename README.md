#  Leak Speak

1st place overall at Microsoft's Gotham DLT Hackaton and 1st place for Brooklyn Law Incubator & Policy Clinic challenge. LeakSpeak is a journalist platform leverging Ethereum technology that provides incentives for sources to convey breaking news!

## :nerd_face: Motivation

Distributed Ledger Technology has the potential to greatly improve the efficiency and
transparency of law and legal processes, while improving access to justice. The application aims to to advance environmental, economic, or social justice through the
use of blockchain technology to provide a streamline process for global issues to be easily communicated. LeakSpeak allows journalists to anonymously reward their sources for their information and protects information from censorship by hosting the data on a non-custodial, decentralized network. In the era of fake news, leakSpeak is a way to get on the ground information and to prevent the rewriting of history. We hope leakSpeak will inspire a new wave of citizen journalism and awareness.

## :shopping_cart: Functionality

* An Organzation can create tokens with Leak Speak
* Journalist can pose question and attempt to gain insight
* Sources can navigate to home page and provide information pertaining to a journalist question

## :hammer_and_pick: Built With

We used Ethereum to manage the data flow and IPFS to slice and distribute all uploaded information. Our tech stack uses react, truffle, ganache, and drizzle for on-demand updates from the blockchain.

 #### Full Tech Stack List
 
* Javascript
* React
* React Semantic UI
* HTML/CSS
* Ethereum
* Ganache
* Drizzle
* IPFS
* Truffle
* Web3
* MetaMask
* Node.js
* Solidity

## :writing_hand: Authors

* Eric Loucks - [EricBot89](https://github.com/EricBot89)
* Andrew O’Grady - [aogrady3](https://github.com/aogrady3)
* Alex Mok - [MistuhMok](https://github.com/MistuhMok)
* Michael Ng - [xMNG](https://github.com/xMNG)

## Screenshots

<img width="500" alt="Screen Shot 2019-12-08 at 2 22 32 PM" src="https://user-images.githubusercontent.com/36509646/70443958-1f75f800-1a67-11ea-9078-1aaf64cb97bb.png">
<img width="500" alt="Screen Shot 2019-12-09 at 9 36 54 AM" src="https://user-images.githubusercontent.com/36509646/70444280-a4611180-1a67-11ea-93c9-46f06f7d9ed2.png">
<img width="500" alt="Screen Shot 2019-12-09 at 9 36 44 AM" src="https://user-images.githubusercontent.com/36509646/70444297-aa56f280-1a67-11ea-85a8-2b1a3418cdea.png">
<img width="500" alt="Screen Shot 2019-12-09 at 9 36 27 AM" src="https://user-images.githubusercontent.com/36509646/70444303-adea7980-1a67-11ea-9fd2-f1541316bd79.png">
<img width="500" alt="Screen Shot 2019-12-09 at 9 35 36 AM" src="https://user-images.githubusercontent.com/36509646/70444315-b17e0080-1a67-11ea-9a07-7201b356f583.png">
<img width="500" alt="Screen Shot 2019-12-09 at 9 36 44 AM" src="https://user-images.githubusercontent.com/36509646/70444354-bc389580-1a67-11ea-9988-4c0fd7b61ce3.png">


## Installation

Note: this configuration process is long and fraught with errors due to the nature of Ethereum development! Please reach out if you encounter issues, we may have encountered and resolved the same ones during our development process.

Ensure that the local Node version is 10.16.10 (the truffle library has dependecy issues with Node v12+)

Navigate to the root directory

npm i in root directory

Navigate to the leakSpeak directory

npm i in the leakSpeak directory

Download and open up Ganache (https://www.trufflesuite.com/ganache). This is our local test Ethereum network that we will be deploying our smart contract on.

In Ganache:

create a new workspace
under the server tab, change the port number to 8545 (this is our local testnet port)
under the accounts & keys tab, copy the mnemonic key (this is how we generate our ethereum address)
save
Create a .secret file in your root directory and paste your mnemonic key from step 7 (this allows the code to deploy our contract with the same address)

In the root directory, compile and migrate the contracts using command truffle migrate (If you do not have truffle installed globally use "./node_modules/.bin/truffle migrate") to deploy the contracts to the local network.

Download Metamask extension for your browser and log in to Metamask (https://metamask.io/) This is an Ethereum address management tool and our interface with the Ethereum blockchain

Enter the Ganache seed account (12 word mnemonic from step 7) into metamask.

Change metamask network to localhost 8545. Our test network is deployed to port 8545.

Navigate to the openhire directory and npm start to run our front end to interact with the blockchain

## Demo 

TBD


