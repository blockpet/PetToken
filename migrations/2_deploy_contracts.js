const PetToken = artifacts.require("./PetToken.sol");
const fs = require("fs");

const relativePath = "../../../config/smart-contracts/PetToken";
const writeFile = (fileName, content) => {
  fs.writeFile(`${__dirname}/${relativePath}/${fileName}`, content, (error) => {
    if (error) {
      console.log("writeFile error", error);
    }
  });
};

module.exports = function (deployer) {
  // PetToken KIP7 deploy
  deployer.deploy(PetToken).then(() => {
    if (PetToken._json) {
      // 1. Record recently deployed contract's abi file to 'deployedABI'
      writeFile(
        "deployedABI",
        JSON.stringify(PetToken._json.abi, 2),
        (error) => {
          if (error) throw error;
          console.log(
            `The abi of ${PetToken._json.contractName} is recorded on deployedABI file`
          );
        }
      );
    }

    // 2. Record recently deployed contract's address to 'deployedAddress'
    writeFile("deployedAddress", PetToken.address, (error) => {
      if (error) throw error;
      console.log(
        `The deployed contract address * ${PetToken.address} * is recorded on deployedAddress file`
      );
    });
  });
};
