import React from 'react'
import DefaultLayout from '../layouts/defaultLayout'

class ClientElement extends React.Component {
  render() {
    return (
      <tr>
        <td>{ this.props.index + 1 }</td>
        <td>{ this.props.client.name }</td>
        <td>{ this.props.client.birth_date.toString() }</td>
        <td>{ this.props.client.birth_place }</td>
      </tr>
    )
  }
}

class ListOfClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: props.clients }
  }

  handleClientList() {
    if (this.state.clients.length === 0)
      return "No client found"
    else
      return (
        <table id="clientList" className="highlight">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date of birth</th>
              <th>Place of birth</th>
            </tr>
          </thead>
          <tbody>
            { this.handleClientListContent(this.state.clients) }
          </tbody>
        </table>
      )
  }

  handleClientListContent(clients) {
    return clients.map((client, index) => React.createElement(ClientElement, {
      key: client.id,
      client: client,
      index: index
    }))
  }

  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h4 className="left-align">{this.props.title}</h4>
        <div>{this.handleClientList()}</div>
      </DefaultLayout>
    );
  }
}

module.exports = ListOfClients;
