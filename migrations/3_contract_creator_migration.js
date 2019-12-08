const Migrations = artifacts.require('ContractCreator');

module.exports = function(deployer) {
  deployer.deploy(
    Migrations,
    2,
    'is there illegal logging in the Amazon rainforest?'
  );
};
