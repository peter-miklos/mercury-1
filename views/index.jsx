import React from 'react'
import DefaultLayout from './layouts/defaultLayout'

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.title}</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
