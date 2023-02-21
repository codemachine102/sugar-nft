import secretSauceImage from 'assets/images/secret_sauce.png';
import React from 'react';

import { Box } from '@mui/material';

function SecretSauce({ sx }) {
  return (
    <Box
      sx={{
        height: '100%',
        backgroundImage: `url(${secretSauceImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        ...sx,
      }}
    ></Box>
  );
}

export default SecretSauce;
