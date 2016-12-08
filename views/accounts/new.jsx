import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import DefaultNameFormat from '../layouts/defaultNameFormat';
import DefaultDateFormat from '../layouts/defaultDateFormat';

class NewAccountHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <h4 className="left-align">{this.props.title}</h4>
      </div>
    )
  }
}

class ClientSelectionElement extends React.Component {
  render() {
    let name = `${this.props.client.first_name} ${this.props.client.last_name}`
    let date = this.props.client.birth_date
    let birth_date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    return (
      <option value={this.props.client._id}>{`${name} (birth date: ${birth_date}, National ID nr: ${this.props.client.national_id_number})`}</option>
    )
  }
}

class NewAccountFormContent extends React.Component {
  handleClientSelectionContent(clients) {
    return clients.map((client) => React.createElement(ClientSelectionElement, {
      key: client._id,
      client: client
    }))
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" method="post" action="/accounts/create">
          <div className="row">
            <div className="input-field col s12">
              <select id="clientSelection" name="clientSelection" required>
                <option value="" disabled selected>Choose a client</option>
                { this.handleClientSelectionContent(this.props.clients) }
              </select>
              <label>Client selection</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <select id="ccySelection" name="ccySelection" required>
                <option value="" disabled selected>Choose a currency</option>
                <option value="CHF">CHF</option>
                <option value="CZK">CZK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="HUF">HUF</option>
                <option value="USD">USD</option>
              </select>
              <label>Currency selection</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">Submit</button>
        </form>
      </div>
    )
  }
}

class NewAccount extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <NewAccountHeader title={this.props.title} />
        <NewAccountFormContent clients={this.props.clients}/>
      </DefaultLayout>
    )
  }
}

module.exports = NewAccount;
