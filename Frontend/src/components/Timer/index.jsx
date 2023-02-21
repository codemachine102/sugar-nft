import { useCountdown } from 'hooks/useCountDown';
import { useEffect } from 'react';
import { useState } from 'react';
import { store } from 'store';
import { setClaimable } from 'store/actions/globalActions';

import { Typography } from '@mui/material';

function Timer({ targetTime }) {
  const [days, hours, minutes, seconds] = useCountdown(targetTime);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (days + hours + minutes + seconds <= 0) {
      store.dispatch(setClaimable());
      setIsExpired(true);
    }
  }, [days, hours, minutes, seconds]);

  if (isExpired) {
    return (
      <Typography variant="h1" component="h2">
        Expired
      </Typography>
    );
  } else {
    return (
      <Typography variant="h3" component="h2" fontFamily="LapsusBold">
        {days} : {hours} : {minutes} : {seconds}
      </Typography>
    );
  }
}

export default Timer;
