import WelcomeComponent from 'components/WelcomeComponent';
import React, { useState } from 'react';

import { Box, Container } from '@mui/material';

const BackgroundImage = ({ setLoading }) => {
  return (
    <img
      src={require('assets/images/background.png')}
      alt=""
      loading="lazy"
      onLoad={() => {
        setLoading(false);
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '222vw',
        left: '0%',
        top: '0%',
        zIndex: -1,
      }}
    />
  );
};

function MainContainer({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Container
      maxWidth="100000px"
      disableGutters
      sx={{
        width: '100%',
        height: '222vw',
        paddingTop: '19%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          // height: 'calc(100% - 100px)',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          zIndex: 10,
        }}
      >
        {/* <Box sx={{ width: '10.5%', height: '100%' }}>
          <Sidebar />
        </Box> */}
        <Box
          sx={{
            marginLeft: '10.5%',
            width: '83%',
            height: '100%',
            background: 'transparent',
          }}
        >
          {children}
        </Box>
      </Box>
      {/* <WelcomeComponent /> */}
      {isLoading && <WelcomeComponent />}
      <BackgroundImage setLoading={setIsLoading} />
    </Container>
  );
}

export default MainContainer;
