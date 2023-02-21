import AssetLockAbi from 'abi/AssetLock.json';
import config from 'config';

import BlockchainService from './blockchainService';

class AssetService extends BlockchainService {
  constructor(assetAddress) {
    super();
    this.contractAddress = assetAddress;
    this.contract = new this.web3.eth.Contract(AssetLockAbi, assetAddress);
  }

  claimAsset = async (from, tokenIds) => {
    try {
      const dataAbi = this.contract.methods.claim(tokenIds).encodeABI();
      const txHash = await this.signTransaction(from, dataAbi, 0);
      return txHash;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
}

const assetService = new AssetService(config.assetLockAddress);

export default AssetService;
export { assetService };
