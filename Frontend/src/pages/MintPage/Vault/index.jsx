import { useBoolean } from 'ahooks';
import vaultImage from 'assets/images/vault.png';
import valutConnectBtnImage from 'assets/images/vault_connect_btn.png';
import { useEffect } from 'react';
import { assetService } from 'services/blockchain/assetService';
import { store } from 'store';
import { useAppSelector } from 'store';
import { setTokenIds } from 'store/actions/globalActions';

import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';

function Vault({ sx }) {
  const { active, account } = useWeb3React();
  const { tokenIds, claimable } = useAppSelector((state) => state.global);
  const [isClaiming, setIsClaiming] = useBoolean(false);
  useEffect(() => {
    if (active) store.dispatch(setTokenIds(account));
  }, [active, account]);

  const onClaim = async () => {
    setIsClaiming.setTrue();
    const tx = await assetService.claimAsset(account, tokenIds);
    if (tx !== null) toast.success('Successfully claimed!');
    setIsClaiming.setFalse();
  };

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${vaultImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        ...sx,
      }}
    >
      <Button
        sx={{
          marginLeft: '3%',
          width: '25%',
          height: '16%',
          padding: '0.8% 0',
        }}
      >
        <img
          src={valutConnectBtnImage}
          style={{ width: '100%', height: '100%' }}
        />
      </Button>
      {/* {tokenIds}
      <LoadingButton
        disabled={!(active && claimable && tokenIds.length > 0)}
        onClick={onClaim}
        loading={isClaiming}
      >
        Claim
      </LoadingButton> */}
    </Box>
  );
}

export default Vault;
