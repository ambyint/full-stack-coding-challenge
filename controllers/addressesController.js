const config = require('../config');
const express = require('express');
const googleMapsClient = require('@google/maps').createClient({
  key: config.mapsApiKey,
  Promise: Promise
});
const router = express.Router();

router.post('/upload-address-file', (req, res) => {
  const addresses = req.files.addresses.data.toString()
    .split('\r\n')
    .map((address) => address.replace(/^"|"$/g, ''))
    .filter((address) => address !== 'Address');
  // let addresses = req.files.addresses.data.toString().replace(/\\n\\r"|"\\r\\n/g, '');
  // return res.json({addresses: addresses.split('\r\n')});
  return res.json({addresses: addresses});
});

router.get('/parse-and-encode-addresses/:address', (req, res) => {
  if (req.params.address) {
    googleMapsClient.geocode({address: req.params.address})
      .asPromise()
      .then((response) => {
        return res.json(response.json.results);
      })
      .catch((error) => {
        console.log(error);
      })
  } else {
    console.log(req.params);
  }
});

module.exports = router;