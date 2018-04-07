import React from 'react';
import Head from 'next/head'

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: false
    }
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        </Head>
        {this.props.children}

        {/*<nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">*/}
          {/*<a className="navbar-brand" href="#">Bottom navbar</a>*/}
          {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*<span className="navbar-toggler-icon"></span>*/}
          {/*</button>*/}
          {/*<div className="collapse navbar-collapse" id="navbarCollapse">*/}
            {/*<ul className="navbar-nav mr-auto">*/}
              {/*<li className="nav-item active">*/}
                {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
              {/*</li>*/}
              {/*<li className="nav-item">*/}
                {/*<a className="nav-link" href="#">Link</a>*/}
              {/*</li>*/}
              {/*<li className="nav-item">*/}
                {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
              {/*</li>*/}
              {/*<li className="nav-item dropup">*/}
                {/*<a className="nav-link dropdown-toggle" href="https://getbootstrap.com" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup</a>*/}
                {/*<div className="dropdown-menu" aria-labelledby="dropdown10">*/}
                  {/*<a className="dropdown-item" href="#">Action</a>*/}
                  {/*<a className="dropdown-item" href="#">Another action</a>*/}
                  {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                {/*</div>*/}
              {/*</li>*/}
            {/*</ul>*/}
          {/*</div>*/}
        {/*</nav>*/}

        <style jsx>{`
          body {
            background-color: #f6f6f6;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          div#__next {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}

export default Page;