const express = require('express');
const LockTime = require('../../../models/Config');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const time = await LockTime.find();
    
    res.json(time);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
