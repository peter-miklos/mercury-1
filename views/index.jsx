import React from 'react'
import DefaultLayout from './layouts/defaultLayout'

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="images/clients_main.png" height="250" />
                  <span className="card-title">Clients</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="/clients">Show All Clients</a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="images/accounts_main.jpg" height="250"/>
                  <span className="card-title">Accounts</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="/accounts">Show All Accounts</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
