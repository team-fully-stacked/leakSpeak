const Migrations = artifacts.require('tokenMinter');

module.exports = function(deployer) {
  deployer.deploy(Migrations, 100, 'British Broadcasting Corporation', 'BBC');
};
