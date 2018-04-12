import axios from 'axios';
import React from 'react';

/**
 * Main address lookup form
 */
class AddressLookupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputStringChange = this.handleInputStringChange.bind(this);
  }

  /**
   * keep the state of the input field updated
   *
   * @param event
   */
  handleInputStringChange(event) {
    this.setState({inputString: event.target.value})
  }

  /**
   * Main form handler
   *
   * @param event
   */
  handleFormSubmit(event) {
    event.preventDefault();
    axios.get(`/addresses/find-address-from/${this.state.inputString}`).then((result) => {
      this.props.formHandler(result);
    })
  }

  /**
   * Render the Address Lookup Form element
   *
   * @returns {xml}
   */
  render() {
    return (
      <form className="address-lookup" onSubmit={this.handleFormSubmit}>
        <label htmlFor="address_search">Search for addresses</label>
        <input type="text" className='address-lookup-text' id="address_search" placeholder="search" value={this.state.inputString} onChange={this.handleInputStringChange} />

        <button type="submit" className="btn btn-primary btn-block">Fetch addresses</button>
        <style jsx="true">{`
          .address-lookup {
            margin: 15px 0;
          }
          .address-lookup-text {
            width: 100%;
            margin-bottom: 4px;
          }
        `}</style>
      </form>
    )
  }
}

export default AddressLookupForm;