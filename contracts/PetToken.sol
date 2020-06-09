pragma solidity ^0.5.6;

import "caver-js/packages/caver-klay/caver-klay-kct/contract/token/KIP7/KIP7Mintable.sol";
import "caver-js/packages/caver-klay/caver-klay-kct/contract/token/KIP7/KIP7Burnable.sol";
import "caver-js/packages/caver-klay/caver-klay-kct/contract/token/KIP7/KIP7Metadata.sol";


/**
 *  Blockchain Pet Token
 *  토큰의 이름을 "PetToken" 으로 하고, 약칭 "BPT" 로 표기한다.
 *  KIP7, Mintable, Burnable, Metadata 속성을 가진다.
 *  Pausable 제외
 */
contract PetToken is KIP7Mintable, KIP7Burnable, KIP7Metadata {
    uint8 public constant DECIMALS = 2;
    uint256 public constant INITIAL_SUPPLY = 100000000 *
        (10**uint256(DECIMALS));

    constructor() public KIP7Metadata("BlockchainPetToken", "BPT", DECIMALS) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
