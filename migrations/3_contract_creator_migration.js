const Migrations = artifacts.require('contractCreator');

module.exports = function(deployer) {
  deployer.deploy(
    Migrations,
    2,
    'is there illegal logging in the Amazon rainforest'
  );
};
