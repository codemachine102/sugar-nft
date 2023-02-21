import carouselImage from 'assets/images/carousel.png';
import React from 'react';

import { Box } from '@mui/material';

import './carousel.css';

function NFTCarousel({ sx }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${carouselImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        padding: '1.5% 0%',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <img
        src={require('assets/images/carousel.png')}
        alt=""
        className="none-img"
      />
      <Box sx={{ height: '100%', width: '200%' }} className="carousel">
        {/* {Array(10)
          .fill()
          .map((_, i) => (
            <img
              style={{ height: '100%', width: '9%', marginLeft: '1%' }}
              key={i}
              src={require(`assets/images/nfts/${i + 1}.png`)}
              alt={i}
            />
          ))} */}
      </Box>
    </Box>
  );
}

export default NFTCarousel;
