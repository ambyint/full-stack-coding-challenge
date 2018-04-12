import React from 'react';
import MapView from './MapView';

/**
 * Display lookup results
 */
class AddressListDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMode: 'list'
    }
  }

  /**
   * Navigation component
   *
   * @param props
   * @returns {xml}
   */
  NavTab(props) {
    const linkClass = `nav-link${props.active ? ' active' : '' }`;
    return (
      <li className="nav-item">
        <a className={linkClass} onClick={props.clickHandler} href="#">{props.text}</a>
      </li>
    )
  }


  /**
   * Render our results display
   *
   * @returns {xml}
   */
  render() {
    return (
      <div>
        <h3>We found {this.props.addresses.length} address{this.props.addresses.length > 1 ? 'es' : ''}.</h3>
        {this.props.addresses.length > 0 &&
          <div>
            <ul className="nav nav-tabs">
              <this.NavTab active={this.state.viewMode === 'list'} clickHandler={(e) => this.setState({viewMode: 'list'})} text="List view" />
              <this.NavTab active={this.state.viewMode === 'map'} clickHandler={(e) => this.setState({viewMode: 'map'})} text="Map view" />
            </ul>


            <div className={this.state.viewMode === 'list' ? 'list-group' : 'd-none'}>
              {this.props.addresses.map((address, index) => (
                <div key={index} className="list-group-item">{address.formatted_address}</div>
              ))}
            </div>

            <div id="map" className={this.state.viewMode === 'map' ? 'map-view' : 'd-none'} >
              <MapView addresses={this.props.addresses} />
            </div>
          </div>
        }
        <button onClick={this.props.reactivateSearch} className='btn btn-primary btn-block'>Search again</button>

        <style jsx="true">{`
            .list-group {
              margin-bottom: 30px;
            }
            .map-view {
              height: 400px;
              width: 100%;
              margin-bottom: 30px;
            }
            h3 {
              font-size: 1.2rem;
              text-align: center;
            }

          `}
        </style>
      </div>
    )
  }
}

export default AddressListDisplay;