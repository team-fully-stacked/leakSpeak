const Migrations = artifacts.require('TokenMinter');

module.exports = function(deployer) {
  deployer.deploy(Migrations, 100, 'British Broadcasting Corporation', 'BBC');
};
