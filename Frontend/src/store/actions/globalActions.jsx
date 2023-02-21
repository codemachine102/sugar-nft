import { sugarHeadService } from 'services/blockchain/sugarHeadService';

import { actionTypes } from './types';

const setCurrentPhase = () => {
  return async (dispatch) => {
    const currentPhase = parseInt(await sugarHeadService.getCurrentPhase());
    dispatch({
      type: actionTypes.setCurrentPhase,
      currentPhase,
    });
  };
};

const setPrice = () => {
  return async (dispatch) => {
    const price = parseInt(await sugarHeadService.getPrice());
    dispatch({
      type: actionTypes.setPrice,
      price,
    });
  };
};

const setCurrentTokenId = () => {
  return async (dispatch) => {
    const currentTokenId = parseInt(await sugarHeadService.getCurrentTokenId());
    dispatch({
      type: actionTypes.setCurrentTokenId,
      currentTokenId,
    });
  };
};

const setTokenIds = (from) => {
  return async (dispatch) => {
    const tokenIds = parseInt(await sugarHeadService.getTokenIdsOf(from));
    dispatch({
      type: actionTypes.setTokenIds,
      tokenIds,
    });
  };
};

const setClaimable = () => {
  return {
    type: actionTypes.setClaimable,
  };
};

export {
  setClaimable,
  setCurrentPhase,
  setCurrentTokenId,
  setPrice,
  setTokenIds,
};
