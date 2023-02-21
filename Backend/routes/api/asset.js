const express = require('express');
const Asset = require('../../models/Asset');
const router = express.Router();
const axios = require('axios');
const baseGeckoUrl = 'https://api.coingecko.com/api/v3/simple/token_price/ethereum?vs_currencies=usd&contract_addresses=';

const getTokenPrices = async (assets) => {
  const tokens = [];
  const amountOfToken = {};
  for(asset of assets) {
    tokens.push(asset.address);
    amountOfToken[asset.address] = asset.amount;
  }
  const res = await axios.get(baseGeckoUrl + tokens.join(','));
  let backedUsd = 0;
  for (const key in amountOfToken) {
    if (res.data[key])
    backedUsd += res.data[key]['usd'] * amountOfToken[key];
  }

  return {"usd": backedUsd};
}

router.get('/', async (req, res) => {
  try {
    const assets = await Asset.find();
    const data = await getTokenPrices(assets);
    res.status(200).send(data);
  } catch {
    res.sendStatus(500)
  } finally {
    res.end();
  }
});

module.exports = router;
