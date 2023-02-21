// import sidebarImage from 'assets/images/sidebar.png';
import React from 'react';

import { Box } from '@mui/material';

function Sidebar() {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        // backgroundImage: `url(${sidebarImage})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '215% 100%',
      }}
    ></Box>
  );
}

export default Sidebar;
