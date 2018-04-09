const Address = require('./address');
const config = require('../config');

class AddressManager {
  createAddress(addr) {
    return Address.create({
      "address_components": addr.address_components,
      "formatted_address": this.sanitizeInput(addr.formatted_address),
      "geometry": addr.geometry,
      "place_id": addr.place_id,
      "types": addr.types,
      "isRooftop": addr.geometry.location_type === 'ROOFTOP'
    });
  }

  findAddressesFromSearch(searchTerm) {
    const sanitizedString = this.sanitizeInput(searchTerm);
    return Address.find({formatted_address: new RegExp('^.*'+searchTerm+'.*$', "i"), isRooftop: true});
  }

  findByFormattedAddress(formatted_address) {
    return Address.find({formatted_address: this.sanitizeInput(formatted_address)});
  }

  parseCsv(csv, delimiter) {
    return csv.split(delimiter)
      .map((address) => address.replace(/^"|"$/g, ''))
      .filter((address) => address !== 'Address');
  }

  sanitizeInput(potentiallyEvilInput) {
    return potentiallyEvilInput.replace(/\.|\$|\//g, '');
  }
}

module.exports = AddressManager;
