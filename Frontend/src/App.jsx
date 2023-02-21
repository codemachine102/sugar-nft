import { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Web3Provider } from '@ethersproject/providers';
import { CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Web3ReactProvider } from '@web3-react/core';

import 'react-toastify/dist/ReactToastify.css';

function getLibrary(provider) {
  var library;

  if (provider?.chainType === 'hmy') {
    library = provider.blockchain;
  } else {
    library = new Web3Provider(provider);
    library.pollingInterval = 8000;
  }

  return library;
}

const MintPage = lazy(() => import('pages/MintPage'));

const Wrapper = () => (
  <Suspense
    fallback={
      <CircularProgress
        color="secondary"
        size="3rem"
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    }
  >
    <Outlet />
  </Suspense>
);

function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Wrapper />}>
              <Route path="/" element={<MintPage />} />
            </Route>
          </Routes>
          <ToastContainer autoClose={7000} />
        </BrowserRouter>
      </Web3ReactProvider>
    </>
  );
}

export default App;
