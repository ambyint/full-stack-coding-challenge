const AddressManager = require('../models/address-manager');
const config = require('../config');
const express = require('express');
const googleMapsClient = require('@google/maps').createClient({
  key: config.mapsApiKey,
  Promise: Promise
});

const router = express.Router();

/**
 * Accept a csv file, parse, and return the file as JSON
 *
 * parameters: addresses (file, required)
 */
router.post('/upload-address-file', (req, res) => {
  const addressManager = new AddressManager();
  return res.json({addresses: addressManager.parseCsv(req.files.addresses.data.toString(), '\r\n')});
});

/**
 * Take a string, send it to the google geocoding service, then save the result to the db
 *
 * parameters: address (string, required)
 */
router.get('/parse-and-encode-addresses/:address', async (req, res) => {
  const addressManager = new AddressManager();

  if (req.params.address) {
    googleMapsClient.geocode({address: req.params.address})
      .asPromise()
      .then((response) => {
        const address = response.json.results[0];

        if (!address.formatted_address) {
          // Geocoding returns true, but with no results
          return res.status(200).json({success: false, msg: 'address could not be found', address: null});
        }

        addressManager.findByFormattedAddress(address.formatted_address)
          .then(result => {
            if (result.length) {
              // Address already exists in database
              return res.status(200).json({success: false, msg: 'duplicate address', address: result[0]});
            } else {
              addressManager.createAddress(address)
                .then((response) => {
                  if (response.formatted_address) {
                    // We've created an address!  Return success.
                    return res.status(201).json({
                      success: true,
                      msg: `address ${response.formatted_address} saved`,
                      address: response
                    });
                  } else {
                    // Something went wrong in the database save
                    return res.status(500).json({success: false, msg: 'no address saved', address: null});
                  }
                })
                .catch((err) => {
                  // Misc. server error
                  return res.status(500).json({success: false, msg: err, address: null});
                })
            }
          })
          .catch((error) => {
            // Misc. error
            return res.status(500).json({success: false, msg: error, address: null});
          })
      })
      .catch((err) => {
        // Often, instead of returning an empty array, the google geocoding api will throw a 500 instead. This catches this error.
        return res.status(500).json({success: false, msg: 'google maps didn\'t like this one', address: null});
      })
  } else {
    // No address was passed to the service.  return error
    return res.status(400).json({success: false, msg: 'no address given', address: null});
  }
});

/**
 * Service to look up address in the database, return Address object.
 */
router.get('/find-address-from/:searchterm', (req, res) => {
  const addressManager = new AddressManager();
  addressManager.findAddressesFromSearch(req.params.searchterm).then((result) => {
    return res.json(result);
  })
});

module.exports = router;