import React from 'react';
import DefaultLayout from '../layouts/defaultLayout'

class ClientDetails extends React.Component {
  render() {
    let date = this.props.client.birth_date;
    return (
      <div id="client_data">
        First name: {this.props.client.first_name}<br />
        Last name: {this.props.client.last_name}<br />
        National ID number: {this.props.client.national_id_number}<br />
        Date of birth: {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}<br />
        Place of birth: {this.props.client.birth_place}<br />
        Email: {this.props.client.email}<br />
      </div>
    )
  }
}

class ShowClientDetails extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h4 className="left-align">{this.props.title}</h4>
        <ClientDetails client={this.props.client}/>
      </DefaultLayout>
    )
  }
}

module.exports = ShowClientDetails;
