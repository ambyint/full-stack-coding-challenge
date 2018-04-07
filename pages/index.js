import AddressFileUploadForm from '../components/AddressFileUploadForm';
import Page from '../layouts/Main';
import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Page>
        <div className="card">
          <h1>Address Lookup</h1>
          <AddressFileUploadForm />
          <form>
            <label htmlFor="address_search">Search for addresses</label>
            <input type="text" id="address_search" placeholder="search" />

            <button type="submit" className="btn btn-primary">Fetch addresses</button>
          </form>
          <style jsx>{`
          html, body {
            height: 100%;
          }
          div.card {
            margin: 0 auto;
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