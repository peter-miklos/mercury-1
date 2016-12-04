import React from 'react'
import DefaultLayout from '../layouts/defaultLayout'

class ListOfClients extends React.Component {
  handleClientList() {
    console.log("TEST")
    if (this.props.clients.length === 0)
      return "No client found"
    else
      return "Clients available"
  }

  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h2>{this.props.title}</h2>
        <div>{this.handleClientList()}</div>
      </DefaultLayout>
    );
  }
}

module.exports = ListOfClients;
