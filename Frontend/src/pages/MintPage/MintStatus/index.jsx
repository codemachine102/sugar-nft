import mintStatusImage from 'assets/images/mint_status.png';
import ConnectWalletButton from 'components/ConnectWalletButton';
import Timer from 'components/Timer';
import config from 'config';
import useFetch from 'hooks/useFetch';
import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { sugarHeadService } from 'services/blockchain/sugarHeadService';
import { useAppSelector } from 'store';
import { store } from 'store';
import { setCurrentTokenId } from 'store/actions/globalActions';

import { Box, Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';

function MintStatus({ sx }) {
  const { active, account } = useWeb3React();
  const { price, currentTokenId } = useAppSelector((state) => state.global);
  // const { data, loading, error } = useFetch(`${config.apiBaseURL}time`);

  useEffect(() => {
    // console.log(data, loading, error);
  }, []);

  const onMint = async () => {
    if (!active) {
      toast.error("Metamask isn't connected.");
      return;
    }
    // const tx = await sugarHeadService.buyNFTWithChadinu(account);
    // await sugarHeadService.buyNFTForFree(account);
    // await sugarHeadService.buyNFTEarly(account, 1, price);
    await sugarHeadService.buyNFTsInPublic(account, 1, price);
    if (tx !== null) store.dispatch(setCurrentTokenId());
  };

  useEffect(() => {
    console.log(price, currentTokenId);
  }, [price, currentTokenId]);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${mintStatusImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        ...sx,
      }}
    >
      <Box sx={{ marginLeft: '25%', width: '50%', height: '30%' }}>
        <ConnectWalletButton />
      </Box>
      <Button onClick={onMint}>Mint</Button>
      {/* {!loading && !error && <Timer targetTime={data.lockedTime * 1000} />} */}
    </Box>
  );
}

export default MintStatus;
