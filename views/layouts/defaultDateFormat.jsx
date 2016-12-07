import React from 'react';

class DefaultDateFormat extends React.Component {
  render() {
    let date = this.props.date;
    return (
      <span>
        {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
      </span>
    )
  }
}

module.exports = DefaultDateFormat;
