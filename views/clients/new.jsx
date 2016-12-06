import React from 'react'
import DefaultLayout from '../layouts/defaultLayout'

class NewClientHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <h4 className="left-align">{this.props.title}</h4>
      </div>
    )
  }
}

class FormContent extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="col s12" method="post" action="/clients/create">
          <div className="row">
            <div className="input-field col s12 m6">
              <input id="first_name" name="first_name" type="text" className="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input id="last_name" name="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6">
              <input id="birth_date" name="birth_date" type="date" className="datepicker" />
              <label for="birth_date">Date of birth</label>
            </div>
            <div className="input-field col s12 m6">
              <input id="birth_place" name="birth_place" type="text" className="validate" />
              <label for="birth_place">Place of birth</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="national_id_number" name="national_id_number" type="text" className="validate" />
              <label for="national_id_number">National ID number</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              Contact information:
              <div className="input-field inline">
                <input id="email" name="email" type="email" className="validate" />
                <label for="email" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn">Submit</button>
        </form>
      </div>
    )
  }
}

class NewClient extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <NewClientHeader title={this.props.title}/>
        <FormContent />
      </DefaultLayout>
    );
  }
}

module.exports = NewClient;
