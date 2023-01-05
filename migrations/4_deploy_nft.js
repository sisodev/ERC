var MyNft = artifacts.require("MyNft");
module.exports = function(deployer) {
    deployer.deploy(MyNft, "0x05457b3f1D0A9AB0cbAc488C93946F38cBC10C13");
    // Additional contracts can be deployed here
};