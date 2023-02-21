import teamImage from 'assets/images/team.png';
import React from 'react';

import { Box } from '@mui/material';

function TeamInfo({ sx }) {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${teamImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        ...sx,
      }}
    ></Box>
  );
}

export default TeamInfo;
