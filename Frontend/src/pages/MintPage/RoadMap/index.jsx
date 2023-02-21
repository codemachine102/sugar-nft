import roadmapImage from 'assets/images/roadmap.png';
import React from 'react';

import { Box } from '@mui/material';

function RoadMap({ sx }) {
  return (
    <Box
      sx={{
        height: '100%',
        backgroundImage: `url(${roadmapImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        ...sx,
      }}
    ></Box>
  );
}

export default RoadMap;
