const express = require('express');
const Config = require('../../models/Config');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const time = await Config.find().select("-_id");
    console.log(time);
    res.status(200).send(time[0]);
    res.end();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
