const Router = artifacts.require("D3XRouter.sol");

module.exports = function (deployer) {
  deployer.deploy(Router, "0x3716027ff7f7c02F7Ab75666F9Da2DC27Fa217d7","0xd9145CCE52D386f254917e481eB44e9943F39138");
};
