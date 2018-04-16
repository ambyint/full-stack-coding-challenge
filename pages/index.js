import AddressFileUploadForm from '../components/AddressFileUploadForm';
import AddressListDisplay from '../components/AddressListDisplay';
import AddressLookupForm from '../components/AddressLookupForm';
import Page from '../layouts/Main';
import React from 'react';

/**
 * Our main page
 */
class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressCount: 0,
      addressList: null,
      showAddressLookupForm: true
    };

    this.populateAddressList = this.populateAddressList.bind(this);
    this.reactivateSearch = this.reactivateSearch.bind(this);
  }

  /**
   * Callback to pass to the address lookup form
   * @param {Address[]} addresses
   */
  populateAddressList(addresses) {
    this.setState({addressList: addresses.data, showAddressLookupForm: false})
  }

  /**
   * Un-hide the address lookup form
   */
  reactivateSearch() {
    this.setState({showAddressLookupForm: true});
  }

  /**
   * Render the page
   *
   * @returns {xml}
   */
  render() {
    return (
      <Page>
        <div className="card">
          <h1>Address Lookup</h1>

          {!this.state.showAddressLookupForm && <AddressListDisplay addresses={this.state.addressList} reactivateSearch={this.reactivateSearch} />}
          {this.state.showAddressLookupForm && <AddressLookupForm formHandler={this.populateAddressList} />}
          <AddressFileUploadForm />

          <style jsx="true">{`
          html, body {
            height: 100%;
          }
          div.card {
            margin: 15px auto;
            padding: 15px;
            width: 100%;
            max-width: 400px;
          }
          h1 {
            text-align: center;
          }
        `}</style>
        </div>
      </Page>
    )
  }
}

export default Index;