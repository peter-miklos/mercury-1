import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import DefaultDateFormat from '../layouts/defaultDateFormat';

class ClientDetails extends React.Component {
  render() {
    return (
      <div className="container" id="client_data">
        <ul className="collection with-header">
          <li className="collection-header"><h5>{this.props.title}</h5></li>
          <li className="collection-item">First name: {this.props.client.first_name}</li>
          <li className="collection-item">Last name: {this.props.client.last_name}</li>
          <li className="collection-item">National ID number: {this.props.client.national_id_number}</li>
          <li className="collection-item">Date of birth: <DefaultDateFormat date={this.props.client.birth_date}/></li>
          <li className="collection-item">Place of birth: {this.props.client.birth_place}</li>
          <li className="collection-item">Email: {this.props.client.email}</li>
        </ul>
      </div>
    )
  }
}

class ShowClientDetails extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <ClientDetails client={this.props.client} title={this.props.title}/>
      </DefaultLayout>
    )
  }
}

module.exports = ShowClientDetails;
