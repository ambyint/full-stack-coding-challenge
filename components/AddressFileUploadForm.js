import axios from 'axios';
import React from 'react';

class AddressFileUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressFile: null,
      errorMsg: '',
      statusMsg: '',
      encodedCount: 0
    }

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.getEncodedAddress = this.getEncodedAddress.bind(this);
  }

  handleFileChange(event) {
    let files = event.target.files || event.dataTransfer.files;
    if (!files.length) {
      this.setState({errorMsg: 'No file was uploaded.  Please try again.'});
    } else {
      this.setState({errorMsg: '', addressFile: files[0]});
    }
  }

  async getEncodedAddress(address) {
    axios.get(`/addresses/parse-and-encode-addresses/${encodeURIComponent(address)}`)
      .then((response) => {
        return response
      })
      .catch ((err) => {
        console.log(err);
      });
  }

  async handleFileUpload(event) {
    const that = this;
    event.preventDefault();

    const postFormData = new FormData();
    postFormData.set('addresses', this.state.addressFile);

    const saveAddresses = await axios({
      method: 'POST',
      url: '/addresses/upload-address-file',
      data: postFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    }).then(async (response) => {
      this.setState({statusMsg: 'Encoding your Addresses.  This could take some time.'});

      const encodedAddresses = await response.data.addresses.map((address) => {
        return that.getEncodedAddress(address);
      });

      that.setState({statusMsg: 'Done Encoding'});
      console.log(encodedAddresses);
    }).catch((error) => {
      console.log(error);
    });
  }

  SubmitButton(props) {
    return (
      <button type="submit" disabled={!props.active} className="btn btn-primary btn-block">Add Addresses</button>
    )
  }

  render() {
    return (
      <div className="check-and-pop-db">
        <form onSubmit={this.handleFileUpload}>
          <label>You can add more addresses below</label>
          <label className="btn btn-default btn-file">
            Browse <input type="file" id="addresses_file" style={{display: 'none'}} onChange={this.handleFileChange} />
          </label>
          <this.SubmitButton active={this.state.addressFile && !this.state.errorMsg} />
        </form>
      </div>
    )
  }
}

export default AddressFileUploadForm;