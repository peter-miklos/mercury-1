import React from 'react'
import DefaultLayout from '../layouts/defaultLayout';
import DefaultNameFormat from '../layouts/defaultNameFormat';
import DefaultDateFormat from '../layouts/defaultDateFormat';

class AccountElement extends React.Component {
  render() {
    let first_name = this.props.account._owner.first_name;
    let last_name = this.props.account._owner.last_name;
    return (
      <li>
        <div className="collapsible-header"><DefaultNameFormat fn={first_name} ln={last_name}/> ({this.props.account.currency})</div>
        <div className="collapsible-body">
          <p><b>Client data:</b><br/>
          National ID number: { this.props.account._owner.national_id_number }<br/>
          Place of birth: {this.props.account._owner.birth_place}<br/>
          Date of birth: <DefaultDateFormat date={this.props.account._owner.birth_date}/></p>
        </div>
      </li>
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
        <ul className="collapsible" data-collapsible="expandable">
          { this.handleAccountListContent(this.state.accounts)}
        </ul>
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
        <div className="container">
          <h4 className="left-align">{this.props.title}</h4>
          {this.handleClientList()}
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = ListOfAccounts;
