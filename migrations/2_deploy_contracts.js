var Crowdfunding = artifacts.require("./Crowdfunding.sol");

module.exports = function(deployer) {
  deployer.deploy(Crowdfunding, 15000, 100000);
};

// module.exports = function(deployer) { 
//   deployer.deploy(Crowdfunding, 1000000)
//
//         // Token price is 0.001 Ether     var tokenPrice = 1000000000000000; 
//          
// );
