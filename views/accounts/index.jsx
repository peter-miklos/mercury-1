import React from 'react'
import DefaultLayout from '../layouts/defaultLayout';
import DefaultNameFormat from '../layouts/defaultNameFormat';

class AccountElement extends React.Component {
  render() {
    let first_name = this.props.account._owner.first_name;
    let last_name = this.props.account._owner.last_name;
    return (
      <tr>
        <td>{ this.props.index + 1 }</td>
        <td><DefaultNameFormat fn={first_name} ln={last_name}/></td>
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
      index: index
    }))
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
