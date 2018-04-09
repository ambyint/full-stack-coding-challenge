import axios from 'axios';
import React from 'react';

/**
 * Address file upload component
 */
class AddressFileUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      addressFile: null,
      addressCount: null,
      errorMsg: '',
      statusMsg: '',
      encodedCount: 0,
      duplicateCount: 0,
      errorCount: 0,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.getEncodedAddresses = this.getEncodedAddresses.bind(this);
    this.geoEncodeAndSaveAddresses = this.geoEncodeAndSaveAddresses.bind(this);
    this.enable = this.enable.bind(this);
  }

  /**
   * Make the form visible
   */
  enable() {
    this.setState({display: true});
  }

  /**
   * Maintain the state of the address file between component and form element
   *
   * @param event
   */
  handleFileChange(event) {
    let files = event.target.files || event.dataTransfer.files;
    if (!files.length) {
      this.setState({errorMsg: 'No file was uploaded.  Please try again.'});
    } else {
      this.setState({errorMsg: '', addressFile: files[0]});
    }
  }

  /**
   * Convert CSV file to JSON
   *
   * @param addressFile
   * @returns {AxiosPromise}
   */
  getEncodedAddresses(addressFile) {
    return axios({
      method: 'POST',
      url: '/addresses/upload-address-file',
      data: addressFile,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    })
  }

  /**
   * Since we're running the requests one at a time,
   * we're going to need to space them out.
   *
   * This times the ajax requests to the service that geocodes and saves the addresses
   */
  floodControl(){
    let address = this.state.jsonEncodedAddresses.shift();
    this.geoEncodeAndSaveAddress(address);
    if (this.state.jsonEncodedAddresses.length) {
      setTimeout(() => {this.floodControl()}, 200);
    }
  }

  /**
   * Prepare the JSON object to be sent to the geocoding service
   *
   * @param jsonEncodedAddresses
   */
  geoEncodeAndSaveAddresses(jsonEncodedAddresses) {
    this.setState({
      statusMsg: 'GeoCoding your Addresses and saving them to the database.  This could take some time.',
      jsonEncodedAddresses: jsonEncodedAddresses
    });

    this.floodControl();
  }

  /**
   * Send address string to the service that geocodes and saves to db
   *
   * @param {string} address
   * @returns {Promise<AxiosResponse<any>>}
   */
  async geoEncodeAndSaveAddress(address) {
    return axios.get(`/addresses/parse-and-encode-addresses/${encodeURIComponent(address)}`)
      .then((response) => {
        if (response.status === 201) {
          this.setState({encodedCount: this.state.encodedCount+1});
        } else if (response.status === 200 && response.data.msg === 'duplicate address') {
          this.setState({duplicateCount: this.state.duplicateCount+1});
        } else {
          this.setState({errorCount: this.state.errorCount+1});
        }
      })
      .catch ((err) => {
        console.log(err);
        this.setState({errorCount: this.state.errorCount+1});
      });
  }

  /**
   * Handle the uploaded form
   *
   * @param event
   * @returns {Promise<void>}
   */
  async handleFileUpload(event) {
    event.preventDefault();

    // put the file in a formData object
    const postFormData = new FormData();
    postFormData.set('addresses', this.state.addressFile);

    try {
      this.setState({statusMsg: 'Uploading your file.'});

      await this.getEncodedAddresses(postFormData)
        .then(async (result) => {
          await this.geoEncodeAndSaveAddresses(result.data.addresses);
        })
    } catch (err) {
      this.setState({statusMsg: '', errorMsg: err});
    }
  }

  /**
   * Submit Button element
   *
   * @param props
   * @returns {*}
   * @constructor
   */
  SubmitButton(props) {
    return (
      <button type="submit" disabled={!props.active} className="btn btn-primary btn-block">Add Addresses</button>
    )
  }

  /**
   * Render the file upload form
   *
   * @returns {xml}
   */
  render() {
    if (this.state.display) {
      return (
        <div className="address-file-upload">
          <form onSubmit={this.handleFileUpload}>
            <label>Add more addresses by uploading a CSV file</label>
            <input className="btn btn-default" type="file" id="addresses_file" onChange={this.handleFileChange} />
            <this.SubmitButton active={this.state.addressFile && !this.state.errorMsg} />
          </form>
          {this.state.statusMsg !== '' && <div className="alert alert-info"><p>{this.state.statusMsg}</p></div>}
          {(this.state.encodedCount !== 0 || this.state.errorCount !== 0 || this.state.duplicateCount !== 0) && <div className="alert alert-info">
            <p>{this.state.encodedCount} addresses encoded.<br />{this.state.duplicateCount} duplicate records.<br />{this.state.errorCount} errors.</p>
          </div>}
          <style jsx="true">{`
            .address-file-upload {
              margin: 15px 0;
            }
          `}</style>
        </div>
      )
    } else {
      return (
        <div className="address-file-upload">
          <a href="#" onClick={this.enable}>Upload more addresses via CSV</a>
          <style jsx="true">{`
            .address-file-upload {
              margin: 15px 0;
            }
          `}</style>
        </div>
      )
    }
  }
}

export default AddressFileUploadForm;