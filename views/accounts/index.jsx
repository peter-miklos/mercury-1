import React from 'react'
import DefaultLayout from '../layouts/defaultLayout';

class AccountElement extends React.Component {
  render() {
    let name = this.props.client ? `${this.props.client.first_name} ${this.props.client.last_name}` : "N/A"
    return (
      <tr>
        <td>{ this.props.index + 1 }</td>
        <td>{ name }</td>
        <td>TBD</td>
        <td>{ this.props.account.currency }</td>
      </tr>
    )
  }
}

class ListOfAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accounts: this.props.accounts}
  }

  handleClientList() {
    if (this.state.accounts.length === 0)
      return "No account found"
    else {
      return (
        <table id="accountList" className="highlight">
          <thead>
            <tr>
              <th>#</th>
              <th>Client name</th>
              <th>Account nr</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            { this.handleAccountListContent(this.state.accounts)}
          </tbody>
        </table>
      )
    }
  }

  handleAccountListContent(accounts) {
    return accounts.map((account, index) => React.createElement(AccountElement, {
      key: account._id,
      account: account,
      client: this.findClient(account),
      index: index
    }))
  }

  findClient(account) {
    return this.props.clients.find(client => client._id === account._owner)
  }

  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h4 className="left-align">{this.props.title}</h4>
        <div>{this.handleClientList()}</div>
      </DefaultLayout>
    )
  }
}

module.exports = ListOfAccounts;
