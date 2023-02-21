import { useBoolean } from 'ahooks';
import MainContainer from 'components/MainContainer';
import MintStatus from 'pages/MintPage/MintStatus';
import NFTCarousel from 'pages/MintPage/NFTCarousel';
import RoadMap from 'pages/MintPage/RoadMap';
import SecretSauce from 'pages/MintPage/SecretSauce';
import TeamInfo from 'pages/MintPage/TeamInfo';
import Vault from 'pages/MintPage/Vault';
import { useEffect } from 'react';
import React from 'react';
import { store } from 'store';
import {
  setCurrentPhase,
  setCurrentTokenId,
  setPrice,
} from 'store/actions/globalActions';
import { sleep } from 'utils/utils';

import { Box } from '@mui/material';

function MintPage() {
  useEffect(() => {
    // store.dispatch(setCurrentPhase());
    // store.dispatch(setPrice());
    // store.dispatch(setCurrentTokenId());
  }, []);

  return (
    <MainContainer>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <MintStatus sx={{ height: '22%' }} />
        <NFTCarousel sx={{ height: '10%' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '22%',
          }}
        >
          <SecretSauce sx={{ width: '45%' }} />
          <RoadMap sx={{ width: '45%' }} />
        </Box>
        <Vault sx={{ height: '22%' }} />
        <TeamInfo sx={{ height: '22%' }} />
      </Box>
    </MainContainer>
  );
}

export default MintPage;
