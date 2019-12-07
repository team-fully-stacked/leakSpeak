pragma solidity ^0.5.13;

tokenHolder
tokenHolder voters - whitelist
uint quorum
string question - send img of xyz
string response


contract contractCreator {
    address public owner;
    uint public quorum;
    string public question;
    string public response;

    bool public live = false; // contract is active, no more changing parameters
    bool public completed = false; // contract is completed
    bool public withdraw = false; // can withdraw from the contract

    array public voters = [];
    mapping(address => bool) voted;

    uint public approvals = 0;
    uint public disapprovals = 0;

    constructor(uint quorum_, string memory question_, ){
        owner = msg.sender;
        quorum = quorum_;
        question = question_;
    }

    modifier onlyOwner() {
        require(msg.sender == owner); // only owner actions
        _;
    }

    modifier notLive(){
        require(live == false); // contract is not yet live
         _;
    }

    modifier isLive(){
        require(live == true); // contract is not yet live
         _;
    }

    function addVoter(address address_) notLive onlyOwner {
        voters.push(address_);
    }

    function goLive() notLive onlyOwner {
        live = true;
    };

    function vote(){

    };

    function withdraw(){

    };
}

library SafeMath { 
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
      assert(b <= a);
      return a - b;
    }
    
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
      uint256 c = a + b;
      assert(c >= a);
      return c;
    }
}
