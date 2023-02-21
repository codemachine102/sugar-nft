import { Box, Typography } from '@mui/material';

function WelcomeComponent() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        height: '222vh',
        backgroundColor: 'white',
        left: '0%',
        top: '0%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ fontFamily: 'LapsusBold', marginTop: '-166.5vw' }}>
        Welcome
      </Typography>
    </Box>
  );
}

export default WelcomeComponent;
