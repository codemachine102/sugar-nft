import { convertToHex } from 'utils/utils';

function useSwitchChain() {
  return (chainId) => {
    (async function () {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: convertToHex(chainId) }], // chainId must be in hexadecimal numbers
      });
    })();
  };
}

export default useSwitchChain;
