pragma solidity ^0.5.11;

contract ContractCreator {

    address public token; // token address

    address public owner; // owner of contract i.e. admin
    uint public quorum; // number of approvals needed
    string public question; // open question seeking approval
    string public responseInfo; // information that the source uploads

    bool public live = false; // contract is active, no more changing parameters
    bool public completed = false; // contract is completed
    bool public withdraw = false; // can withdraw from the contract

    address[] public voters;
    uint public votersLength = 0;
    mapping(address => bool) allowedToVote;
    mapping(address => bool) voted;

    uint public approvals = 0;

    // TODO: add check for token balance
    constructor(uint quorum_, string memory question_) public {
    // constructor(uint quorum_, string memory question_, address token_) public {
        owner = msg.sender;
        quorum = quorum_;
        question = question_;
        // token = token_;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, 'only owner!'); // only owner actions
        _;
    }

    modifier isLive(){
        require(live == true, 'contract is not live!'); // contract is not yet live
         _;
    }

    modifier notLive(){
        require(live == false, 'contract is live!'); // contract is not yet live
         _;
    }

    function addVoter(address address_) public notLive onlyOwner  returns (bool) {
        require(!allowedToVote[address_], 'address already able to vote!');

        voters.push(address_);
        allowedToVote[address_] = true;
        votersLength++;

        return true;
    }

    function goLive() public onlyOwner returns (bool){
        live = true;
        return true;
    }

    function vote() public isLive returns (bool){
        require(allowedToVote[msg.sender] == true, 'voter not authorized!');
        require(!voted[msg.sender], 'voter already voted!');
        approvals++; // use safe math later

        if(approvals >= quorum) { // if quorum reached,
            withdraw = true;
            completed = true;
        }

        return true;
    }

    function submitInfo(string memory info) public isLive returns (bool){
        responseInfo = info;
        return true;
    }

    // function withdraw(){
    //     // withdraw erc20 via approve/transferFrom
    //      // only source can withdraw so we need source
    // };
}

// library SafeMath {
//     function sub(uint256 a, uint256 b) internal pure returns (uint256) {
//       assert(b <= a);
//       return a - b;
//     }

//     function add(uint256 a, uint256 b) internal pure returns (uint256) {
//       uint256 c = a + b;
//       assert(c >= a);
//       return c;
//     }
// }
