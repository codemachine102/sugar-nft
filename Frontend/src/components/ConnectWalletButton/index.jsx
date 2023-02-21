import mintBtnImage from 'assets/images/mint_btn.png';
import config from 'config';
import { useConnectWallet, useSwitchChain } from 'hooks';
import React, { useEffect } from 'react';
import { shortWeb3Acount } from 'utils/utils';

import { Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';

const ConnectWalletButton = () => {
  const connectWallet = useConnectWallet();
  const switchChain = useSwitchChain();
  const { account, chainId } = useWeb3React();
  const handleConnect = async () => {
    await connectWallet();
  };

  useEffect(() => {
    if (chainId && chainId !== config.chainId) {
      switchChain(config.chainId);
    }
  }, [chainId, switchChain]);

  return (
    <React.Fragment>
      {/* {account ? (
        <Button>{shortWeb3Acount(account)}</Button>
      ) : ( */}
      <Button onClick={handleConnect}>
        <img src={mintBtnImage} style={{ width: '100%', height: '100%' }} />
      </Button>
      {/* )} */}
    </React.Fragment>
  );
};

export default ConnectWalletButton;
