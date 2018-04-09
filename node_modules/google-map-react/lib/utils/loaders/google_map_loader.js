'use strict';

exports.__esModule = true;

var _lodash = require('lodash');

/* eslint-disable no-console */
var BASE_URL = 'https://maps';
var DEFAULT_URL = BASE_URL + '.googleapis.com';

var getUrl = function getUrl(region) {
  if (region && region.toLowerCase() === 'cn') {
    return BASE_URL + '.google.cn';
  }
  return DEFAULT_URL;
};

var $script_ = null;

var loadPromise_ = void 0;

var resolveCustomPromise_ = void 0;

var _customPromise = new Promise(function (resolve) {
  resolveCustomPromise_ = resolve;
});

// TODO add libraries language and other map options

exports.default = function (bootstrapURLKeys, heatmapLibrary) {
  if (!$script_) {
    $script_ = require('scriptjs'); // eslint-disable-line
  }

  // call from outside google-map-react
  // will be as soon as loadPromise_ resolved
  if (!bootstrapURLKeys) {
    return _customPromise;
  }

  if (loadPromise_) {
    return loadPromise_;
  }

  loadPromise_ = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      reject(new Error('google map cannot be loaded outside browser env'));
      return;
    }

    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }

    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
      reject(new Error('google map initialization error'));
    }

    window._$_google_map_initialize_$_ = function () {
      delete window._$_google_map_initialize_$_;
      resolve(window.google.maps);
    };

    if (process.env.NODE_ENV !== 'production') {
      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
        var message = '"callback" key in bootstrapURLKeys is not allowed,\n                          use onGoogleApiLoaded property instead';
        console.error(message);
        throw new Error(message);
      }
    }

    var queryString = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
      return r + '&' + key + '=' + bootstrapURLKeys[key];
    }, '');

    // if no version is defined, we want to get the release version
    // and not the experimental version, to do so, we set v=3
    // src: https://developers.google.com/maps/documentation/javascript/versions
    if ((0, _lodash.isEmpty)(bootstrapURLKeys.v)) {
      queryString += '&v=3.31';
    }

    var baseUrl = getUrl(bootstrapURLKeys.region);
    var libraries = heatmapLibrary ? '&libraries=visualization' : '';

    $script_(baseUrl + '/maps/api/js?callback=_$_google_map_initialize_$_' + queryString + libraries, function () {
      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
    });
  });

  resolveCustomPromise_(loadPromise_);

  return loadPromise_;
};